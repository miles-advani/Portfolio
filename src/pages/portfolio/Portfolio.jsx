// import "./Portfolio.css";
import Layout from "../../components/layout/Layout.jsx";
import AboutMe from "../../components/about-me/AboutMe.jsx";
import Projects from "../../components/projects/Projects.jsx";
import Contact from "../../components/contact/Contact.jsx";

export default function Portfolio() {
  return (
    <>
      <Layout>
        <AboutMe />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}
