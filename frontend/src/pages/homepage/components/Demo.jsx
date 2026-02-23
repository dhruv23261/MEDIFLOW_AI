const DemoSection = () => {
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

         <section className="w-full py-20 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Smart Appointment Booking <span className="text-orange-500">With AI</span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            MediFlow AI suggests optimized time slots based on doctor 
            availability, workload, and patient priority — ensuring 
            conflict-free scheduling every time.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              AI-based slot suggestions
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              Zero double-booking
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
              Reduced cancellations
            </li>
          </ul>
        </div>

        {/* RIGHT BOOKING UI */}
        <div className="bg-gray-50 shadow-xl rounded-2xl p-6 space-y-6">
          <h3 className="text-xl font-semibold text-gray-800">
            Book Appointment
          </h3>

          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 text-center bg-green-100 text-green-700 rounded-lg cursor-pointer">
              9:00 AM
            </div>
            <div className="p-3 text-center bg-green-100 text-green-700 rounded-lg cursor-pointer">
              10:30 AM
            </div>
            <div className="p-3 text-center bg-gray-200 text-gray-500 rounded-lg">
              11:00 AM
            </div>
          </div>

          <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
            Confirm Booking
          </button>
        </div>

      </div>
    </section>

      <section className="w-full py-20 px-6 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SCHEDULE UI */}
        <div className="bg-white shadow-xl rounded-2xl p-6 space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Blended Daily Schedule
          </h3>

          <div className="flex justify-between border-b pb-2">
            <span>9:00 AM</span>
            <span className="text-red-500 font-medium">Patient – John</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span>9:30 AM</span>
            <span className="text-gray-700">📄 Personal-task</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span>10:00 AM</span>
            <span className="text-red-500 font-medium">Patient – Meera</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span>10:30 AM</span>
            <span className="text-gray-700">📞 Follow-up Call</span>
          </div>

          <div className="flex justify-between">
            <span>11:00 AM</span>
            <span className="text-red-500 font-medium">Patient – Raj</span>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Tasks Blended Between <span className="text-orange-500">Appointments</span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Once appointments are confirmed, MediFlow AI automatically
            fills available gaps with documentation, follow-ups, and
            admin tasks — maximizing productivity without burnout.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              Appointments stay fixed
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              AI detects free gaps
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              Tasks auto-arranged
            </li>
          </ul>
        </div>

      </div>
    </section>

      </div>
    </section>
  );
};

export default DemoSection;




