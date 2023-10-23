import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Sigouin
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__copyright">
        <small>
          Copyright &copy; 2023 Matthew Sigouin. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
