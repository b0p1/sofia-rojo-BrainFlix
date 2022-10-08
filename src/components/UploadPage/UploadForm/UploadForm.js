import "./upload-form.scss";
import PublishIcon from "../../../assets/icons/publish.svg";

function UploadForm(props) {
  return (
    <form className="upload-form">
      <label className="upload-form__label" htmlFor="title-box">
        TITLE YOUR VIDEO
      </label>
      <input
        type="text"
        className="upload-form__title-box"
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
        rows="5"
      ></textarea>
      <div className="upload-form-button-container">
        <button className="upload-form__button">PUBLISH</button>
        <img
          className="upload-form__button-icon"
          src={PublishIcon}
          alt="Publish Icon"
        />
      </div>
    </form>
  );
}

export default UploadForm;
