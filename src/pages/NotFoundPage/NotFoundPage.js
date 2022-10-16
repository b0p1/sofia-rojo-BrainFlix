import { Link } from "react-router-dom";
import "./not-found-page.scss";
function NotFoundPage() {
  return (
    <>
      <div className="not-found-page">
        <h1 className="not-found-page__title">Error 404. Page not found!</h1>
        <Link to="/">
          <h2 className="not-found-page__subtitle">
            Click here to go back to the home page.
          </h2>
        </Link>
      </div>
    </>
  );
}

export default NotFoundPage;
