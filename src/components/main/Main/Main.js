import VideoBar from "../VideoBar";
import VideoSection from "../VideoSection/VideoSection";
import CommentsSection from "../VideoSection/VideoComments/CommentsSection";
import VideoBarAside from "../VideoBarAside";
import "./main.scss";

function Main({ updatedVideos, selectedVideo }) {
  return (
    <>
      <div className="video-main">
        <div className="video-main__desc">
          <VideoSection selectedVideo={selectedVideo} />
          <CommentsSection selectedVideo={selectedVideo} />
          <VideoBar
            updatedVideos={updatedVideos}
            selectedVideo={selectedVideo}
          />
        </div>

        <aside className="video-main__aside">
          <VideoBarAside
            updatedVideos={updatedVideos}
            selectedVideo={selectedVideo}
          />
        </aside>
      </div>
    </>
  );
}

export default Main;
//
