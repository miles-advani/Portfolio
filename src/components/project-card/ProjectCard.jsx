import { Link } from "react-router-dom";
import "./ProjectCard.css";
import ProjectLinks from "../project-links/projectLinks";

export default function ProjectCard({
  id,
  image,
  title,
  status,
  shortDescription,
  techStack,
  readMoreLink,
}) {
  console.log("ID:", id); //
  console.log("Image:", image); //
  console.log("Title:", title); //
  console.log("Short Description:", shortDescription); //
  console.log("Tech Stack:", techStack); //
  console.log("Read More Link:", readMoreLink); //

  return (
    <>
      <div className="project-card">
        <img className="project-card-image" src={image} alt={title} />

        <div className="project-card-content">
          <h3 className="project-header">{title}</h3>
          {status && <span className="project-status">{status}</span>}{" "}
          <p className="project-description">{shortDescription}</p>
          {/* {readMoreLink.trim() !== "" && (
            <Link to={readMoreLink} className="read-more">
              Read more ...
            </Link>
          )} */}
          {readMoreLink.trim() !== "" &&
            (/^http/.test(readMoreLink) ? (
              <a
                href={readMoreLink}
                className="read-more"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more ...
              </a>
            ) : (
              <Link to={readMoreLink} className="read-more">
                Read more ...
              </Link>
            ))}
            {/*  ---------*/}
          <ul className="skills">
            <li>Tech Stack:</li>
            {techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <ProjectLinks id={id} />
        </div>
      </div>
    </>
  );
}
