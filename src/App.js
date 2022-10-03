import "./App.css";
import "./styles/global.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/main/Main";
import videoDetails from "./data/video-details.json";
import { useState, useEffect } from "react";
import axios from "axios";
import useFetch from "react-fetch-hook";

function App() {
  // // console.log(videoDetails);

  const URL = "https://project-2-api.herokuapp.com/videos";
  const apiKey = "7d80d951-1eaf-492c-aed1-7f90377d76cd";

  // const {data} = useFetch(`${URL}?api_key=${apiKey}`);
  // console.log(data);

  // const [selectedVideo, setSelected] = useState(data[0]);
  // console.log(selectedVideo);

  const [videos, getVideos] = useState("");

  const fetchData = () => {
    axios
      .get(`${URL}?api_key=${apiKey}`)

      .then((resp) => {
        console.log(resp.data);
        getVideos(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  // const videosWithoutSelectedVideo = data.filter((item) => {
  //   return item.id !== selectedVideo.id;
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
      {/* {displayData()} */}
      <h2>{videos}</h2>
    </>
  );
}

export default App;
