import BookCallSection from "./components/Bookcall";
import DemoSection from "./components/Demo";
import Footer from "./components/Footer";
import Herosection from "./components/Hero";
import Navbar from "./components/Navbar";
import PricingSection from "./components/Pricing";

const HomePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Herosection></Herosection>
      <DemoSection></DemoSection>
      <PricingSection></PricingSection>
      <BookCallSection></BookCallSection>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
