import { projectCards } from "../data";
import ProjectCard from "./ProjectCard";

function Portfolio() {
  return (
    <section class="portfolio">
      <div class="subhead-recent-work" id="portfolio">
        <h2 class="recent uppercase">
          Recent <span class="work uppercase primary-color">Work</span>
        </h2>
        <span class="big-portfolio-text uppercase big-text-color">
          Portfolio
        </span>
      </div>
      <div class="recent-work-container">
        {projectCards.map(({ id, imageSrc, summary, projectLink }) => {
          return (
            <ProjectCard
              key={id}
              imageSrc={imageSrc}
              summary={summary}
              projectLink={projectLink}
            />
          );
        })}
      </div>
    </section>
  );
}
export default Portfolio;
