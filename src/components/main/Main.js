import VideoBar from "./VideoBar";
import VideoSection from "./VideoSection/VideoSection";
import CommentsSection from "./VideoSection/VideoComments/CommentsSection";
import VideoBarAside from "./VideoBarAside";

function Main({ videos, selectedVideo, setSelected }) {
  //   console.log(selectedVideo);

  return (
    <>
      <div className="video-main">
        <VideoSection selectedVideo={selectedVideo} />
        <CommentsSection selectedVideo={selectedVideo} />
        <VideoBar
          videos={videos}
          selectedVideo={selectedVideo}
          setSelected={setSelected}
        />
      </div>
      <aside>
      <VideoBarAside videos={videos}
        selectedVideo={selectedVideo}
        setSelected={setSelected} />
      </aside>
    </>
  );
}

export default Main;
//
