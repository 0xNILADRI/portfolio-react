import "../index.css";
function Hero() {
  return (
    <>
      <section className="hero">
        <div className="middle-col">
          <p className="my-name uppercase primary-color">Niladri Ghosh</p>
          <h1 className="secondary-color">Designer. Developer.</h1>
          <a href="#" className="know-more-button uppercase">
            Know More
          </a>
        </div>
      </section>

      <div className="hero-illustration">
        <img className="bottom-illustration" alt="Bottom Illustration" />
      </div>
    </>
  );
}
export default Hero;
