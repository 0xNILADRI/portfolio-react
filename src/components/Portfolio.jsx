import { projectCards } from "../data";
import ProjectCard from "./ProjectCard";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="subhead-recent-work" id="portfolio">
        <h2 className="recent uppercase">
          Recent <span className="work uppercase primary-color">Work</span>
        </h2>
        <span className="big-portfolio-text uppercase big-text-color">
          Portfolio
        </span>
      </div>
      <div className="recent-work-container">
        <div className="project-grid">
          <div className="columns">
            {projectCards.map(({ key, imageSrc, summary, projectLink }) => {
              return (
                <ProjectCard
                  key={key}
                  imageSrc={imageSrc}
                  summary={summary}
                  projectLink={projectLink}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
