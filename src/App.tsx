import Billing from "./components/Billing";
import Card from "./components/Card";
import Companies from "./components/Companies";
import Features from "./components/Features";
import FeedBack from "./components/FeedBack";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Service from "./components/Service";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden font-poppins">
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1480px] w-full">
          <NavBar />
        </div>
      </div>
      <div className=" flex justify-center items-start">
        <div className="xl:max-w-[1480px] w-full">
          <Hero />
        </div>
      </div>
      <div className=" flex justify-center items-start sm:px-16 px-6">
        <section className="xl:max-w-[1480px] w-full ">
          <Features />
          <Billing />
          <Card />
          <FeedBack />
          <Companies />
          <Service />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
