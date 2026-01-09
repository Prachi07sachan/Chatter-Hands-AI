import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Learning from "./Components/Learning";
import SignDetector from "./Components/SignDetector";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Learning />
      <SignDetector />
      <Footer />
    </div>
  );
}

export default App;
