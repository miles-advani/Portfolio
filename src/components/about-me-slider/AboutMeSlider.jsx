import "./AboutMeSlider.css";

export default function AboutMeSlider({ header, paragraphOne, paragraphTwo, paragraphThree}) {
  return (
    <div className="about-me-slider">
      <h2 className="about-me-slider-header">{header}</h2>
      <p className="about-me-slider-content">{paragraphOne}</p>
      <p className="about-me-slider-content">{paragraphTwo}</p>
      <p className="about-me-slider-content">{paragraphThree}</p>
    </div>
  );
}
