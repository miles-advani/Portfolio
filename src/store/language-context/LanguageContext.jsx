import { createContext, useState } from "react";
import englishLayoutData from "../../assets/data/layoutDataEnglish.json";
import germanLayoutData from "../../assets/data/layoutDataGerman.json";
import englishProfileData from "../../assets/data/profileDataEnglish.json";
import germanProfileData from "../../assets/data/profileDataGerman.json";
import englishProjectData from "../../assets/data/projectDataEnglish.json";
import germanProjectData from "../../assets/data/projectDataGerman.json";
import englishProjectCollaborationsData from "../../assets/data/projectCollaborationsDataEnglish.json";
import germanProjectCollaborationsData from "../../assets/data/projectCollaborationsDataGerman.json";
import englishContactData from "../../assets/data/contactDataEnglish.json";
import germanContactData from "../../assets/data/contactDataGerman.json";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const initialLanguage = localStorage.getItem("language") || "eng";

  const [layoutData, setLayoutData] = useState(
    initialLanguage === "eng" ? englishLayoutData : germanLayoutData
  );

  const [profileData, setProfileData] = useState(
    initialLanguage === "eng" ? englishProfileData : germanProfileData
  );
  const [projectData, setProjectData] = useState(
    initialLanguage === "eng" ? englishProjectData : germanProjectData
  );
  const [projectCollaborationsData, setProjectCollaborationsData] = useState(
    initialLanguage === "eng"
      ? englishProjectCollaborationsData
      : germanProjectCollaborationsData
  );
  const [contactData, setContactData] = useState(
    initialLanguage === "eng" ? englishContactData : germanContactData
  );

  console.log("Initial Language:", initialLanguage); //
  console.log("Profile Data:", profileData); //
  console.log("Project Data:", projectData); //
  console.log("Project Collaborations Data:", projectCollaborationsData); //
  console.log("Contact Data:", contactData); //

  const switchToEnglish = () => {
    setLayoutData(englishLayoutData);
    setProfileData(englishProfileData);
    setProjectData(englishProjectData);
    setProjectCollaborationsData(englishProjectCollaborationsData);
    setContactData(englishContactData);
    localStorage.setItem("language", "eng");
  };

  const switchToGerman = () => {
    setLayoutData(germanLayoutData);
    setProfileData(germanProfileData);
    setProjectData(germanProjectData);
    setProjectCollaborationsData(germanProjectCollaborationsData);
    setContactData(germanContactData);
    localStorage.setItem("language", "ger");
  };

  return (
    <LanguageContext.Provider
      value={{
        layoutData,
        profileData,
        projectData,
        projectCollaborationsData,
        contactData,
        switchToEnglish,
        switchToGerman,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
