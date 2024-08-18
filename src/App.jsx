import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/about";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div
          className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24"
          style={{
            background: "#131316",
          }}
        ></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default App;
