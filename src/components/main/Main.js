import VideoBar from "./VideoBar";
import VideoSection from "./VideoSection/VideoSection";

function Main({ videoDetails, selectedVideo, setSelected }) {
  console.log(selectedVideo);

  return (
    <div>
      <VideoSection selectedVideo={selectedVideo} />
      <VideoBar
        videoDetails={videoDetails}
        selectedVideo={selectedVideo}
        setSelected={setSelected}
      />
    </div>
  );
}

export default Main;
//
