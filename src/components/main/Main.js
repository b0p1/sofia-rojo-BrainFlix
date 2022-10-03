import VideoBar from "./VideoBar";
import VideoSection from "./VideoSection/VideoSection";
import CommentsSection from "./VideoSection/VideoComments/CommentsSection";
import VideoBarAside from "./VideoBarAside";

function Main({ videoDetails, selectedVideo, setSelected }) {
  //   console.log(selectedVideo);

  return (
    <>
      <div className="video-main">
        <VideoSection selectedVideo={selectedVideo} />
        <CommentsSection selectedVideo={selectedVideo} />
        <VideoBar
          videoDetails={videoDetails}
          selectedVideo={selectedVideo}
          setSelected={setSelected}
        />
      </div>
      <VideoBarAside videoDetails={videoDetails}
        selectedVideo={selectedVideo}
        setSelected={setSelected} />
    </>
  );
}

export default Main;
//
