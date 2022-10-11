import Header from "../../components/Header/Header";
import VideoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import UploadForm from "../../components/UploadForm/UploadForm";

import "./upload-page.scss";

function UploadPage() {
  return (
    <>
      <Header />
      <h1 className="upload-title">Upload Video</h1>
      <section className="upload-container">
        <div className="upload-thumbnail-form">
          <div className="upload-thumbnail">
            <h2 className="upload-thumbnail__title">VIDEO THUMBNAIL</h2>
            <img
              className="upload-thumbnail__img"
              src={VideoThumbnail}
              alt="Video Thumbnail Preview"
            />
          </div>
          <UploadForm />
        </div>
      </section>
    </>
  );
}

export default UploadPage;
