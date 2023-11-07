import "./Header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import me from "../../assets/me.png";
import NameSlider from "../slider/slider";

function Header() {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Matthew Sigouin</h1>
        <h5 className="text-light">Aspiring Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={me} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <div>
          <NameSlider />
        </div>
      </div>
    </header>
  );
}

export default Header;
