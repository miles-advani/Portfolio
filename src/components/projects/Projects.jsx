import { useContext } from "react";
import { LanguageContext } from "../../store/language-context/LanguageContext";
import "./Projects.css";
import ProjectCard from "../project-card/ProjectCard";

export default function Projects() {
  const { projectData, projectCollaborationsData, layoutData } =
    useContext(LanguageContext);

  console.log("Project Data:", projectData); //
  console.log("Project Collaborations Data:", projectCollaborationsData); //

  return (
    <>
      <main id="projects">
        {layoutData.projectHeaders.allProjects !== "" && (
          <h2 className="projects-header">
            {layoutData.projectHeaders.allProjects}
          </h2>
        )}

        <div className="projects-container">
          <section className="my-projects-container">
            {layoutData.projectHeaders.myProjects !== "" && (
              <h2 className="projects-header">
                {layoutData.projectHeaders.myProjects}
              </h2>
            )}
            {Object.keys(projectData).map((id) => (
              <ProjectCard key={id} id={id} {...projectData[id]} />
            ))}
          </section>
          <section className="collaborations-container">
            {layoutData.projectHeaders.collaborations !== "" && (
              <h2 className="projects-header">
                {layoutData.projectHeaders.collaborations}
              </h2>
            )}
            {Object.keys(projectCollaborationsData).map((id) => (
              <ProjectCard
                key={id}
                id={id}
                {...projectCollaborationsData[id]}
              />
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
