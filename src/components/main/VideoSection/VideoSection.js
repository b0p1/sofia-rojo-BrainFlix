import VideoDetails from "./VideoDetails";


function VideoSection({ selectedVideo, setSelected }) {
  return (
    <section className="video-section">
      <VideoDetails selectedVideo={selectedVideo} setSelected={setSelected} />
    </section>
  );
}

export default VideoSection;
