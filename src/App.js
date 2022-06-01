import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";
import useExternalJs from "./components/useExternalJs";
import Works from "./components/Works";

function App() {
  useExternalJs('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js');
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
