import About from "./Components/About/About";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Servicesx/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Services />
    </div>
  );
}

export default App;
