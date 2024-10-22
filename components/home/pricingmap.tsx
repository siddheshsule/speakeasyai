const PricingMap = [
    {
      name: "Basic",
      description: "Get started with speak easy",
      price: "9.99",
      items: ["3 Blog Posts", "3 Transcriptions"],
      paymentLink: "https://buy.stripe.com/test_4gwdUA1xf8sN7GU4gh",
      priceId: process.env.NODE_ENV === "development" ? "price_1QBuVkDgqO5gvwgPdrl8jJ7m" : "",
    },
    {
      name: "Pro",
      description: "All Blog Posts, let's do it!",
      price: "19.99",
      items: ["Unlimited Blog Posts", "Unlimited Transcriptions"],
      paymentLink: "https://buy.stripe.com/test_bIY7wc4JrcJ3d1eeUW",
      priceId: process.env.NODE_ENV === "development" ? "price_1QBuTtDgqO5gvwgPZv9Z1qAW" : "",
    },
  ];

export default PricingMap;
