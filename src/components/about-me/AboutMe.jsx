import { useContext } from "react";
import { LanguageContext } from "../../store/language-context/LanguageContext";
import "./AboutMe.css";
import Profile from "../profile/Profile.jsx";
import AboutMeSlider from "../about-me-slider/AboutMeSlider.jsx";
import TechStackSlider from "../tech-stack-slider/TechStackSlider.jsx";
import ProfilePic from "../../assets/images/profile-picture.png";

export default function AboutMe() {
  const { profileData } = useContext(LanguageContext);

  console.log("Profile Data:", profileData); //
  console.log("Profile Image:", ProfilePic); //

  const getData = (data, id) => data[id];

  const aboutMeData = getData(profileData, "profile");
  const aboutMeSliderData = getData(profileData, "aboutMeSlider");
  const techStackSliderData = getData(profileData, "techStackSlider");

  return (
    <>
      <section id="about-me">
        <Profile profileImage={ProfilePic} {...aboutMeData} />

        <div className="sliders-container">
          <AboutMeSlider {...aboutMeSliderData} />
          <TechStackSlider {...techStackSliderData} />
        </div>
      </section>
    </>
  );
}
