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
      <header style={{ padding: "20px", textAlign: "center" }}>
      <h1>Chatter Hands Learn Sign Language with AI</h1>
      <p>Empowering communication through technology</p>
      <p style={{ fontSize: "14px", color: "#555" }}>
       UI updated via Pull Request practice
      </p>

    </header>
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
