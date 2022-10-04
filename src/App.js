import "./App.css";
import "./styles/global.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/main/Main";
import videoDetails from "./data/video-details.json";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // // console.log(videoDetails);

  const URL = "https://project-2-api.herokuapp.com/videos";
  const apiKey = "?api_key=7d80d951-1eaf-492c-aed1-7f90377d76cd";

  const [videos, getVideos] = useState([]);
  const [selectedVideo, setSelected] = useState(videos[0]);
  console.log(selectedVideo);

  useEffect(() => {
    axios
      .get(`${URL}${apiKey}`)

      .then((resp) => {
        console.log(resp.data);
        getVideos(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const videoMap = videos.map((comment) => {
    return comment.image;
  });

  // const videosWithoutSelectedVideo = videos.filter((video) => {
  //   return video.id !== selectedVideo.id;
  // });
  return (
    <>
      {/* <Header />
      <Hero selectedVideo={selectedVideo} setSelected={setSelected} />
      <Main
        videoDetails={videoWithoutSelectedVideo}
        selectedVideo={selectedVideo}
        setSelected={setSelected}
      /> */}
      <h2>{videoMap}</h2>
    </>
  );
}

export default App;
