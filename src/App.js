import "./App.css";
import "./styles/global.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/main/Main";
import videos from "./data/videos.json";
import { useState } from "react";

function App() {
  const [videoData] = useState(videos);
  const [selectedVideo, setSelected] = useState(videos[0]);

  const videoWithoutSelectedVideo = videos.filter((item) => {
    return item.id !== selectedVideo.id;
  });
  return (
    <>
      <Header />
      <Hero videos={videoWithoutSelectedVideo} setSelected={setSelected} />
      <Main videos={videoData} setSelected={setSelected} />
    </>
  );
}

export default App;
