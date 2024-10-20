import PricingMap from "./pricingmap";
import PricingCard from "./pricingcard";

function Pricing() {
  const pricingMap = PricingMap;
  return (
    <section className="relative overflow-hidden" id="pricing">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-12 lg:px-0">
        {/* Centered Pricing Heading */}
        <div className="flex items-center justify-center w-full pb-12">
          <h2 className="font-bold text-2xl uppercase mb-8 text-purple-600">
            Pricing
          </h2>
        </div>
        {/* Card below heading */}
        <div className="lg:flex gap-10 items-center justify-center lg:mb-0 md:mb-10">
            {pricingMap.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
