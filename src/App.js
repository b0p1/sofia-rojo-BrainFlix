import "./App.css";
import "./styles/global.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/main/Main";
import videoDetails from "./data/video-details.json";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // // // console.log(videoDetails);
  // const [selectedVideo, setSelected] = useState(videoDetails[0]);
  // // console.log(selectedVideo);
  // const videoWithoutSelectedVideo = videoDetails.filter((item) => {
  //   return item.id !== selectedVideo.id;
  // });

  const URL = "https://project-2-api.herokuapp.com/videos";
  const apiKey = "?api_key=7d80d951-1eaf-492c-aed1-7f90377d76cd";

  const [videos, getVideos] = useState([]);
  
  

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

  const [selectedVideo, setSelected] = useState(videos[0]);
  // console.log(videos);

  const videosWithoutSelectedVideo = videos.filter((video) => {
    return video.id !== selectedVideo.id;
    console.log(videosWithoutSelectedVideo);
  });

  const videoMap = videos.map((comment) => {
    return comment.channel;
  });

  
  
  return (
    <>
      {/* <Header />
      <Hero selectedVideo={selectedVideo} setSelected={setSelected} />
      <Main
        updatedVideos={videosWithoutSelectedVideo}
        selectedVideo={selectedVideo}
        setSelected={setSelected}
      /> */}
      <p>{videoMap}</p>
    </>
  );
}

export default App;
