import Header from "../../components/Header";
import VideoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import UploadForm from "../../components/UploadForm/UploadForm/UploadForm";

import "./upload-page.scss";

function UploadPage() {
  return (
    <>
      <Header />
      <section className="upload-container">
        <h1 className="upload-title">Upload Video</h1>
        <div className="upload-thumbnail">
          <h2 className="upload-thumbnail__title">VIDEO THUMBNAIL</h2>
          <img
            className="upload-thumbnail__img"
            src={VideoThumbnail}
            alt="Video Thumbnail Preview"
          />
        </div>
        <UploadForm />
      </section>
    </>
  );
}

export default UploadPage;
