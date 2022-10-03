import VideoDescription from "./VideoDescription";

function VideoDetails({ selectedVideo }) {
//   console.log(selectedVideo);

  return (
    <div className="video-section__details">
      <h1>{selectedVideo.title}</h1>
      <div className="video-section__data">
        <h2 className="video-section__data__channel">
          {selectedVideo.channel}
        </h2>
        <h2 className="video-section__data__views">{selectedVideo.views}</h2>
        <h2 className="video-section__data__date">{selectedVideo.timestamp}</h2>
        <h2 className="video-section__data__likes">{selectedVideo.likes}</h2>
      </div>
      <VideoDescription selectedVideo={selectedVideo} />
    </div>
  );
}

export default VideoDetails;
