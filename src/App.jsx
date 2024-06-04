import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Content } from "./components/Content";
import { FAQ } from "./components/FAQ";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div className="w-screen flex flex-col items-center">
        <Navbar />
      </div>
      <Hero />
      <Content />
      <FAQ />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
