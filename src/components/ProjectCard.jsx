function ProjectCard({ imageSrc, summary, projectLink }) {
  return (
    <>
      <div class="project-grid">
        <div class="column">
          <figure class="image">
            <img class="project-thumb" src={imageSrc} />
            <figcaption>
              <div class="overlay"></div>
              <h1 class="title">{summary}</h1>
              <a class="button" href={projectLink} target="_blank">
                <span>Visit Website</span>
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  );
}
export default ProjectCard;
