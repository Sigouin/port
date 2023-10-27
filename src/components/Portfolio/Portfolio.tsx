import "./portfolio.css";

// Fill array with projects that need to be displayed

// const data = [
//   {
//     id: 1,
//     image:
//     title: 'DoorDash Mockup for Chick-Fila-A',
//     github: 'https://github.com/Sigouin/dashdoor',
//     demo:
//   },
// ]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      {/* data.map(({id, image, title, github, demo}) => {}) */}
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3>DashDoor</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Sigouin/dashdoor"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
