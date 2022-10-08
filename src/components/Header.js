import BrainFlixLogo from "../assets/logo/BrainFlix-logo.svg";
import ProfileAvatar from "../assets/images/Mohan-muruge.jpg";
import SearchIcon from "../assets/icons/search.svg";
import UploadIcon from "../assets/icons/upload.svg";
import "../styles/nav-bar.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <Link to="/">
          <img
            className="nav__logo"
            src={BrainFlixLogo}
            alt={"BrainFlix Logo"}
          ></img>
        </Link>
        <div className="nav__search-bar-container">
          <input
            className="nav__search-bar"
            type={"text"}
            placeholder={"Search"}
          ></input>
          <img className="nav__search-bar__icon" src={SearchIcon} />
        </div>
        <Link to="/upload">
          <div className="nav__button-container">
            <button className="nav__button"> UPLOAD</button>
            <img className="nav__button__icon" src={UploadIcon} />
          </div>
        </Link>
        <img
          className="nav__avatar"
          src={ProfileAvatar}
          alt={"Profile Avatar"}
        />
      </nav>
    </header>
  );
};

export default Header;
