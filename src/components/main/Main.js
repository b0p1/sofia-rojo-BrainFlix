import VideoBar from "./VideoBar";
import VideoSection from "./VideoSection/VideoSection";
import CommentsSection from "./VideoSection/VideoComments/CommentsSection";

function Main({ videoDetails, selectedVideo, setSelected }) {
//   console.log(selectedVideo);

  return (
    <div>
      <VideoSection selectedVideo={selectedVideo} />
      <CommentsSection selectedVideo={selectedVideo}/>
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
