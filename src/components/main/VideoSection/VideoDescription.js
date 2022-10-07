import "../../../styles/main/video-details.scss";

function VideoDescription({ selectedVideo }) {
  return (
    <div className="video-section__description">
      <p> {selectedVideo.description}</p>
      <h3> {selectedVideo.comments.length} Comments</h3>
    </div>
  );
}

export default VideoDescription;
