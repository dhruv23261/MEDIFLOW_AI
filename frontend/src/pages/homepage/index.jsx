import DemoSection from "./components/Demo";
import Herosection from "./components/Hero";
import Navbar from "./components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Herosection></Herosection>
      <DemoSection></DemoSection>
    </>
  );
};

export default HomePage;
