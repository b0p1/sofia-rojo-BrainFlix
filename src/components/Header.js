import BrainFlixLogo from "../assets/logo/BrainFlix-logo.svg";
import ProfileAvatar from "../assets/images/Mohan-muruge.jpg";

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <img src={BrainFlixLogo} alt={"BrainFlix Logo"}></img>
        <input
          className="nav__search-bar"
          type={"text"}
          placeholder={"Search"}
        ></input>
        <button className="nav__button"> UPLOAD</button>
        <image src={ProfileAvatar} alt={"Profile Avatar"}></image>
      </nav>
    </header>
  );
};

export default Header;
