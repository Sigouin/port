import "./App.css";
import About from "./components/About/about";
import { Contact } from "./components/Contact/contact";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
