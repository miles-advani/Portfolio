import "./NotFound.css";
import Layout from "../../components/layout/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="not-found-container">
        <h1>404</h1>
        <p>Page not found!</p>
      </div>
    </Layout>
  );
}
