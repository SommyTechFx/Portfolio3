import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";
import MyWork from "./Components/MyWork/MyWork";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Servicesx/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Services />
      <MyWork />
      <Contact />
    </div>
  );
}

export default App;
