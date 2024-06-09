import "./BlogPost.css";

export default function BlogPost({ header, content }) {
  return (
    <div className="blog-post">
      <h2 className="blog-post-header">{header}</h2>
      <p>{content}</p>
    </div>
  );
}