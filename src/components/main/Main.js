import VideoBar from "./VideoBar";
import VideoSection from "./VideoSection/VideoSection";
import CommentsSection from "./VideoSection/VideoComments/CommentsSection";
import VideoBarAside from "./VideoBarAside";

function Main({ updatedVideos, selectedVideo, setSelected }) {

  return (
    <>
      <div className="video-main">
        <VideoSection selectedVideo={selectedVideo} />
        {/* <CommentsSection selectedVideo={selectedVideo} /> */}
        <VideoBar
          updatedVideos={updatedVideos}
          selectedVideo={selectedVideo}
          setSelected={setSelected}
        />
      </div>
      <aside>
      <VideoBarAside 
        updatedVideos={updatedVideos}
        selectedVideo={selectedVideo}
        setSelected={setSelected} />
      </aside>
    </>
  );
}

export default Main;
//
