import Header from "../../components/Header";
import VideoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import UploadForm from "../../components/UploadPage/UploadForm/UploadForm";
import { Link } from "react-router-dom";
import './upload-page.scss'

function UploadPage() {
  return (
    <>
      <Header/>
      <section className="upload-container">
        <h1>Upload Video</h1>
        <div className="upload-thumbnail">
          <h2 className="upload-thumbnail__title">VIDEO THUMBNAIL</h2>
          <img
            className="upload-thumbnail__img"
            src={VideoThumbnail}
            alt="Video Thumbnail Preview"
          />
        </div>
        <UploadForm />
        <Link to="/">
          <h2 className="upload-cancel">CANCEL</h2>
        </Link>
      </section>
    </>
  );
}

export default UploadPage;
