import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./store/language-context/LanguageContext.jsx";
import FontAwesome from "./utils/font-awesome/FontAwesome.jsx";
import Portfolio from "./pages/portfolio/Portfolio.jsx";
import BlogPosts from "./pages/blog-posts/BlogPosts.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";

export default function App() {
  return (
    <Router>
      <FontAwesome />
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/blog/:projectId" element={<BlogPosts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LanguageProvider>
    </Router>
  );
}
