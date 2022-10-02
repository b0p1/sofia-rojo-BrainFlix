import VideoDescription from "./VideoDescription";

function VideoDetails({ selectedVideo }) {
  console.log(selectedVideo);

  return (
    <div className="video-section__details">
      <h1>{selectedVideo.title}</h1>
      <div className="video-section__data">
        <h2 className="video-section__data__channel">
          {selectedVideo.channel}
        </h2>
        <h2 className="video-section__data__views">viewcount</h2>
        <h2 className="video-section__data__date">date</h2>
        <h2 className="video-section__data__likes">likes</h2>
      </div>
      <VideoDescription />
    </div>
  );
}

export default VideoDetails;
