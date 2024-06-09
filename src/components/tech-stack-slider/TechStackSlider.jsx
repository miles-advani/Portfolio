import "./TechStackSlider.css";

export default function TechStackSlider({ header, techStack }) {
  return (
    <div className="tech-stack-slider">
      <h2 className="tech-stack-header">{header}</h2>
      <ul className="tech-stack">
        {techStack.map((tech) => (
          <li key={tech.name}>
            <i className={`fa-brands fa-${tech.icon}`}></i>
            {tech.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
