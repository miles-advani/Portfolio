import { useContext } from "react";
import { LanguageContext } from "../../store/language-context/LanguageContext";
import "./Contact.css";

export default function Contact() {
  const { contactData } = useContext(LanguageContext);
  console.log("Contact Data:", contactData.socialLinks); //

  return (
    <section id="contact">
      <h2 className="contact-header">{contactData.header}</h2>

      {contactData.socialLinks.map((link) => (
        <a
          className="contact-links"
          key={link.id}
          href={link.url}
          title={link.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.name}
          <i className={`fa-brands fa-${link.icon}`}></i>
        </a>
      ))}

      {contactData.emailLink && (
        <a
          className="contact-links"
          href={contactData.emailLink.url}
          title={contactData.emailLink.title}
        >
          {contactData.emailLink.name}{" "}
          <i className={`far fa-${contactData.emailLink.icon}`}></i>
        </a>
      )}
    </section>
  );
}
