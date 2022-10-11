import React from "react";
import VideoCard from "./VideoCard/VideoCard";
import "./video-bar.scss";

function VideoBarAside({ updatedVideos }) {
  const videoMap = updatedVideos.map((item) => {
    return <VideoCard key={item.id} item={item} />;
  });

  return (
    <>
      <section className="video-bar-aside">
        <h3 className="video-bar-aside__title">NEXT VIDEOS</h3>
        <div className="video-bar-aside__list">{videoMap}</div>
      </section>
    </>
  );
}

export default VideoBarAside;
