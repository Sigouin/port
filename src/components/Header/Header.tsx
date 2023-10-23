import "./Header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Matt</h1>
        <h5 className="text-light">What am I</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={"🧔🏻‍♂️"} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
