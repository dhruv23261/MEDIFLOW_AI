import Doctors from "../../../assets/doctors.svg";

const Herosection = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-between px-6 md:px-16 bg-white">
      
      {/* Left Content */}
      <div className="max-w-xl mt-20 text-left">
        <div className="text-4xl  font-bold leading-tight">
          <h4>Less Chaos. More<span className="text-red-500"> Care.</span>
          </h4>
        </div>

        <p className="mt-6 text-gray-600 text-lg">
          Streamline hospital workflows, manage appointments efficiently,
          and focus more on patient care with MediFlow AI.
        </p>

        <button className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition">
          Get Started
        </button>
      </div>

      {/* Right Side (Optional Image Placeholder) */}
      <div className="hidden md:block w-1/2">
        <div className="h-80 flex items-center justify-center">
         <img src={Doctors} alt="Doctors illustration" className="w-full max-w-md" />

        </div>
      </div>

    </section>

    
  );
};

export default Herosection;
