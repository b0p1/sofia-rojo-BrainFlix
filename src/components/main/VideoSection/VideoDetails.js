import VideoDescription from "./VideoDescription";
import "../../../styles/main/video-details.scss";
import ViewIcon from "../../../assets/icons/views.svg";
import LikesIcon from "../../../assets/icons/likes.svg";

function VideoDetails({ selectedVideo }) {

  return (
    <div className="video-section__details">
      <h1 >{selectedVideo.title}</h1>
      <div className="video-section__data">
        <div className="video-section__top-row">
          <h2 className="video-section__channel">By {selectedVideo.channel}</h2>
          <img className="video-section__views-icon" src={ViewIcon}/>
          <h2 className="video-section__views">{selectedVideo.views}</h2>
        </div>
        <div className="video-section__bottom-row">
          <h2 className="video-section__date">
            {formatDate(new Date(selectedVideo.timestamp))}
          </h2>
          <img className="video-section__likes-icon" src={LikesIcon}/>
          <h2 className="video-section__likes">{selectedVideo.likes}</h2>
        </div>
      </div>
      <VideoDescription selectedVideo={selectedVideo} />
    </div>
  );
}

function formatDate(date) {
  let timeStampDate = String(date.getDate()).padStart(2, "0");
  let timeStampMonth = String(date.getMonth() + 1).padStart(2, "0");
  let timeStampYear = date.getFullYear();

  let timeStampString =
    timeStampMonth + "/" + timeStampDate + "/" + timeStampYear;

  return timeStampString;
}

export default VideoDetails;
