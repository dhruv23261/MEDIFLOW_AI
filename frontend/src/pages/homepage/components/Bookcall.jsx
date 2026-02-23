import Call from "../../../assets/Calling.svg";
const BookCallSection = () => {
  return (
    <section className="w-full py-24 px-6 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold leading-tight">
            Still Have Questions About{" "}
            <span className="text-orange-500">MediFlow AI?</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Let us walk you through how our AI-powered scheduling system
            optimizes appointments, reduces conflicts, and improves
            hospital workflow efficiency.
          </p>

          <button className="mt-8 bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition shadow-lg">
            Book a Free Demo Call
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={Call}
            alt="Book a demo call"
            className="w-full max-w-md rounded-2xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default BookCallSection;