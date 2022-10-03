import "./App.css";
import "./styles/global.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/main/Main";
import videos from "./data/videos.json";
import videoDetails from "./data/video-details.json";
import { useState } from "react";

function App() {
  // console.log(videoDetails);
  const [selectedVideo, setSelected] = useState(videoDetails[0]);
  // console.log(selectedVideo);
  const videoWithoutSelectedVideo = videoDetails.filter((item) => {
    return item.id !== selectedVideo.id;
  });
  return (
    <>
      <Header />
      <Hero selectedVideo={selectedVideo} setSelected={setSelected} />
      <Main
        videoDetails={videoWithoutSelectedVideo}
        selectedVideo={selectedVideo}
        setSelected={setSelected}
      />
    </>
  );
}

export default App;
