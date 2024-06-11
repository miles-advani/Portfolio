// import "./BlogPost.css";

// export default function BlogPost({ header, content }) {

//   return (
//     <div className="blog-post">
//       <h2 className="blog-post-header">{header}</h2>
//       <p>{content}</p>
//     </div>
//   );
// }
import "./BlogPost.css";

export default function BlogPost({ header, content }) {
  if (!header && !content) {
    return null;
  }

  return (
    <div className="blog-post">
      {header && <h2 className="blog-post-header">{header}</h2>}
      {content && <p>{content}</p>}
    </div>
  );
}