import "./upload-form.scss";
import PublishIcon from "../../assets/icons/publish.svg";
import { Link } from "react-router-dom";

function UploadForm(props) {
  return (
    <form className="upload-form">
      <label className="upload-form__label" htmlFor="title-box">
        TITLE YOUR VIDEO
      </label>
      <input
        type="text"
        className="upload-form__label-box"
        id="title-box"
        placeholder="Add a title to your video"
      ></input>
      <label className="upload-form__label" htmlFor="desc-box">
        ADD A VIDEO DESCRIPTION
      </label>
      <textarea
        id="desc-box"
        className="upload-form__desc-box"
        autoComplete="off"
        placeholder="Add a description to your video"
        // rows="8"
      ></textarea>
      <div className="upload-form-bottom-container">
        <Link to="/">
          <h2 className="upload-form__cancel">CANCEL</h2>
        </Link>
        <div className="upload-form-button-container">
          <Link to="/">
            <button className="upload-form__button">PUBLISH</button>
          </Link>
          <img
            className="upload-form__button-icon"
            src={PublishIcon}
            alt="Publish Icon"
          />
        </div>
        <Link to="/">
          <h2 className="upload-form__cancel-bottom">CANCEL</h2>
        </Link>
      </div>
    </form>
  );
}

export default UploadForm;
