import { useContext } from "react";
import { LanguageContext } from "../../store/language-context/LanguageContext";
import "./projectLinks.css";

export default function ProjectLinks({ id }) {
  const { projectData, projectCollaborationsData } =
    useContext(LanguageContext);

  console.log("ID:", id); //
  console.log("Project Data:", projectData); //
  console.log("Project Collaborations Data:", projectCollaborationsData); //

  const project = projectData[id] || projectCollaborationsData[id];
  const { codeLink = "", previewLink = "" } = project || {};

  return (
    <ul className="project-links">
      {codeLink.trim() !== "" && (
        <li>
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            Code <i className="fa-brands fa-github"></i>
          </a>
        </li>
      )}

      {previewLink.trim() !== "" && (
        <li>
          <a href={previewLink} target="_blank" rel="noopener noreferrer">
            Preview <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </li>
      )}
    </ul>
  );
}
