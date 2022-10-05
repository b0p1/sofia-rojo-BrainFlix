import React from "react";
import VideoCard from "./VideoCard";
import '../../styles/main/video-bar.scss'

function VideoBarAside({ videos, setSelected }) {
    console.log(videos);
  const videoMap = videos.map((item) => {
    return <VideoCard key={item.id} item={item} setSelected={setSelected} />;
  });
  // console.log(videoMap);
  return (
    <>
      <aside className="video-bar-aside">
        <h3 className="video-bar-aside__title">NEXT VIDEOS</h3>
        <div className="video-bar-aside__list">{videoMap}</div>
      </aside>
    </>
  );
}

export default VideoBarAside;
