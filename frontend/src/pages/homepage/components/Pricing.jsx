const PricingSection = () => {
  return (
    <section className="w-full py-18 px-6 md:px-16 bg-gray-50">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold">
          Simple & Transparent <span className="text-red-500">Pricing</span>
        </h2>
        <p className="mt-6 text-gray-600 text-lg">
          Choose a plan that fits your hospital or clinic workflow.
          No hidden charges. Cancel anytime.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Basic Plan */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border">
          <h3 className="text-xl font-semibold">Basic</h3>
          <p className="mt-4 text-4xl font-bold">₹999<span className="text-lg font-normal text-gray-500">/mo</span></p>

          <ul className="mt-6 space-y-3 text-gray-600">
            <li>✔ Smart appointment booking</li>
            <li>✔ Conflict detection</li>
            <li>✔ Email reminders</li>
          </ul>

          <button className="mt-8 w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-black transition">
            Get Started
          </button>
        </div>

        {/* Pro Plan (Highlighted) */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 border-2 border-orange-500 relative">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 text-sm rounded-full">
            Most Popular
          </span>

          <h3 className="text-xl font-semibold">Pro</h3>
          <p className="mt-4 text-4xl font-bold">₹2499<span className="text-lg font-normal text-gray-500">/mo</span></p>

          <ul className="mt-6 space-y-3 text-gray-600">
            <li>✔ AI slot optimization</li>
            <li>✔ Task blending system</li>
            <li>✔ Smart rescheduling</li>
            <li>✔ Priority support</li>
          </ul>

          <button className="mt-8 w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition">
            Choose Plan
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border">
          <h3 className="text-xl font-semibold">Enterprise</h3>
          <p className="mt-4 text-4xl font-bold">Custom</p>

          <ul className="mt-6 space-y-3 text-gray-600">
            <li>✔ Multi-doctor management</li>
            <li>✔ Advanced AI analytics</li>
            <li>✔ Custom integrations</li>
            <li>✔ Dedicated account manager</li>
          </ul>

          <button className="mt-8 w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-black transition">
            Contact Sales
          </button>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;