const SmartSchedulingSection = () => {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* SECTION HEADING */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Intelligent Scheduling <span className="text-orange-500">Powered by AI</span>
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
            MediFlow AI optimizes appointment booking and blends tasks
            seamlessly between patient visits — maximizing productivity
            while reducing chaos.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE – BOOKING UI */}
          <div className="bg-white shadow-xl rounded-2xl p-6 space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Smart Appointment Booking
            </h3>

            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Available Slots (AI Optimized)
              </label>

              <div className="grid grid-cols-3 gap-3">
                <div className="p-2 text-center bg-green-100 text-green-700 rounded-lg cursor-pointer">
                  9:00 AM
                </div>
                <div className="p-2 text-center bg-green-100 text-green-700 rounded-lg cursor-pointer">
                  10:30 AM
                </div>
                <div className="p-2 text-center bg-gray-200 text-gray-500 rounded-lg">
                  11:00 AM
                </div>
              </div>
            </div>

            <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
              Confirm Booking
            </button>
          </div>

          {/* RIGHT SIDE – BLENDED SCHEDULE */}
          <div className="bg-white shadow-xl rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Blended Daily Schedule
            </h3>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">9:00 AM</span>
              <span className="text-red-500 font-medium">
                Patient – John
              </span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">9:30 AM</span>
              <span className="text-gray-700">
                📄 Lab Review
              </span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">10:00 AM</span>
              <span className="text-red-500 font-medium">
                Patient – Meera
              </span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">10:30 AM</span>
              <span className="text-gray-700">
                📞 Follow-up Call
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">11:00 AM</span>
              <span className="text-red-500 font-medium">
                Patient – Raj
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SmartSchedulingSection;
