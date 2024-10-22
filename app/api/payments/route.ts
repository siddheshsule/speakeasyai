import { handleCheckoutSessionCompleted, handleSubscriptionDeleted } from "@/lib/payment-helpers";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  const payload = await request.text();
  const sig = request.headers.get("stripe-signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      payload,
      sig!,
      process.env.STRIPE_WEBHOOK_KEY!
    );

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        const session = await stripe.checkout.sessions.retrieve(
          event.data.object.id,
          {
            expand: ["line_items"],
          }
        );
        console.log({ session });

        await handleCheckoutSessionCompleted({session, stripe});

        break;

      case "customer.subscription.deleted":
        // connect to db
        const subscriptionId = event.data.object.id;
        const subscription = await stripe.subscriptions.retrieve(
          subscriptionId
        );

        console.log({ subscription });

        await handleSubscriptionDeleted({subscriptionId, stripe});

        // connect to db
        // update users status to cancelled
        // revoke acesses
        break;

      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  } catch (err) {
    return NextResponse.json({ status: "Failed", err });
  }

  return NextResponse.json({
    status: "success",
  });
}
