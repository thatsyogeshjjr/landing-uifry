import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

function App() {
  return (
    <>
      <div className="w-screen flex flex-col items-center">
        <Navbar />
      </div>
      <Hero />
    </>
  );
}

export default App;
