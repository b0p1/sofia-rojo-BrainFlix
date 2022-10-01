import VideoBar from "./VideoBar";
import videoDetails from "../../data/video-details.json";
import { useState } from "react";

function Main({ videos, setSelected }) {
//   console.log(videos);
  return (
    <div>
      <VideoBar videos={videos} setSelected={setSelected} />
    </div>
  );
}

export default Main;
// 