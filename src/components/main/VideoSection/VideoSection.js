import VideoDetails from "./VideoDetails";
import "../../../styles/main/video-details.scss";

function VideoSection({ selectedVideo, setSelected }) {
  return (
    <section className="video-section">
      <VideoDetails selectedVideo={selectedVideo} setSelected={setSelected} />
    </section>
  );
}

export default VideoSection;
