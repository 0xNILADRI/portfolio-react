function ProjectCard({ id, imageSrc, summary, projectLink }) {
  return (
    <div className="project-grid" key={id}>
      <div className="column">
        <figure className="image">
          <img className="project-thumb" src={imageSrc} />
          <figcaption>
            <div className="overlay"></div>
            <h1 className="title">{summary}</h1>
            <a className="button" href={projectLink} target="_blank">
              <span>Visit Website</span>
            </a>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
export default ProjectCard;
