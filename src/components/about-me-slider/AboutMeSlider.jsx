import "./AboutMeSlider.css";

export default function AboutMeSlider({ header, content }) {
  return (
    <div className="about-me-slider">
      <h2 className="about-me-slider-header">{header}</h2>
      <p className="about-me-slider-content">{content}</p>
    </div>
  );
}
