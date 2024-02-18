import "../index.css";
function Hero() {
  return (
    <>
      <section class="hero">
        <div class="middle-col">
          <p class="my-name uppercase primary-color">Niladri Ghosh</p>
          <h1 class="secondary-color">Designer. Developer.</h1>
          <a href="#" class="know-more-button uppercase">
            Know More
          </a>
        </div>
      </section>

      <div class="hero-illustration">
        <img class="bottom-illustration" alt="Bottom Illustration" />
      </div>
    </>
  );
}
export default Hero;
