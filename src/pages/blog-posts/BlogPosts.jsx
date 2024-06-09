import "./BlogPosts.css";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { LanguageContext } from "../../store/language-context/LanguageContext";
import Layout from "../../components/layout/Layout";
import BlogPost from "../../components/blog-post/BlogPost";
import ProjectLinks from "../../components/project-links/projectLinks";

export default function BlogPosts() {
  const { projectId } = useParams();
  const { projectData, projectCollaborationsData } =
    useContext(LanguageContext);
  const post = projectData[projectId] || projectCollaborationsData[projectId];

  useEffect(() => {
    console.log("Post changed:", post); //
    window.scrollTo(0, 0);
  }, [post]);

  console.log("Project data:", projectData); //
  console.log("Project collaborations data:", projectCollaborationsData); //
  console.log("Post:", post); //

  return (
    <Layout>
      <div className="blog-post-container">
        <h1 className="blog-header">{post.title}</h1>

        {post.blogPosts.map((blogPost, index) => (
          <BlogPost
            key={index}
            header={blogPost.header}
            content={blogPost.content}
          />
        ))}

        <div className="project-links-container">
          <ProjectLinks id={projectId} />

          {post.githubLinks && post.collaborators && (
            <ul className="collaborator-links">
              {post.githubLinks.filter((link) => link.trim() !== "").length >
                0 && <li>Collaborators:</li>}

              {post.githubLinks
                .filter((link) => link.trim() !== "")
                .map((link, index) => (
                  <li key={index}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {post.collaborators[index]}{" "}
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </Layout>
  );
}
