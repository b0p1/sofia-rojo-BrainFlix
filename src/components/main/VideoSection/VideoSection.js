import VideoDetails from "./VideoDetails";
import "../../../styles/main/video-details.scss";

function VideoSection({ selectedVideo }) {
  return (
    <section className="video-section">
      <VideoDetails selectedVideo={selectedVideo} />
    </section>
  );
}

export default VideoSection;
