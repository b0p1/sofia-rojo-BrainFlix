import VideoBar from "./VideoBar";
import VideoSection from "./VideoSection/VideoSection";
import CommentsSection from "./VideoSection/VideoComments/CommentsSection";
import VideoBarAside from "./VideoBarAside";

function Main({ updatedVideos, selectedVideo }) {
  return (
    <>
      <div className="video-main">
        <VideoSection selectedVideo={selectedVideo} />
        <CommentsSection selectedVideo={selectedVideo} />
        <VideoBar updatedVideos={updatedVideos} selectedVideo={selectedVideo} />
      </div>
      <aside>
        <VideoBarAside
          updatedVideos={updatedVideos}
          selectedVideo={selectedVideo}
        />
      </aside>
    </>
  );
}

export default Main;
//
