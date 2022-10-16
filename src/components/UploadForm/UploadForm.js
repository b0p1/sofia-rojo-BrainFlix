import "./upload-form.scss";
import PublishIcon from "../../assets/icons/publish.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UploadForm({}) {
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate("/");
        axios.post("http://localhost:8080/videos", {
          title: e.target.title.value,
          description: e.target.desc.value,
        });
      }}
      className="upload-form"
    >
      <label className="upload-form__label" htmlFor="title-box">
        TITLE YOUR VIDEO
      </label>
      <input
        name="title"
        type="text"
        className="upload-form__label-box"
        id="title-box"
        placeholder="Add a title to your video"
      ></input>
      <label className="upload-form__label" htmlFor="desc-box">
        ADD A VIDEO DESCRIPTION
      </label>
      <textarea
        name="desc"
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
          <button type="submit" className="upload-form__button">
            PUBLISH
          </button>

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
