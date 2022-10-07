import BrainFlixLogo from "../assets/logo/BrainFlix-logo.svg";
import ProfileAvatar from "../assets/images/Mohan-muruge.jpg";
import SearchIcon from "../assets/icons/search.svg";
import UploadIcon from "../assets/icons/upload.svg";
import "../styles/nav-bar.scss";

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <img
          className="nav__logo"
          src={BrainFlixLogo}
          alt={"BrainFlix Logo"}
        ></img>
        <div className="nav__search-bar-container">
          <input
            className="nav__search-bar"
            type={"text"}
            placeholder={"Search"}
          ></input>
          <img className="nav__search-bar__icon" src={SearchIcon} />
        </div>
        <div className="nav__button-container">
          <button className="nav__button"> UPLOAD</button>
          <img className="nav__button__icon" src={UploadIcon} />
        </div>

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
