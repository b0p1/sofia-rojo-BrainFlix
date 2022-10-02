import VideoDetails from "./VideoDetails";
import videoDetails from "../../../data/video-details.json";
import { useState } from "react";

function VideoSection({ selectedVideo, setSelected }) {
  return (
    <section className="video-section">
      <VideoDetails selectedVideo={selectedVideo} setSelected={setSelected} />
    </section>
  );
}

export default VideoSection;
