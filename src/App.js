import "./App.css";
import "./styles/global.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/main/Main";
import videoDetails from "./data/video-details.json";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const URL = "https://project-2-api.herokuapp.com/videos";
  const apiKey = "?api_key=7d80d951-1eaf-492c-aed1-7f90377d76cd";


  const [videos, getVideos] = useState([]);
  const [selectedVideo, setSelected] = useState(null);

  const videosWithoutSelectedVideo = videos.filter((video) => {
    if(selectedVideo !== undefined){
     return video.id !== selectedVideo.id; 
   }
 });

  // Fetches data from api 
  useEffect(() => {
    axios
      .get(`${URL}${apiKey}`)

      .then((resp) => {
        // console.log(resp.data);
        getVideos(resp.data);
        setSelected(resp.data[0])
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // Returns null when there is an empty object
  // --this allows the object to load before it is called in the other components
  if (!selectedVideo){
    return null
  }

  return (
    <>
    {/* <h2>{selectedVideo.channel}</h2> */}
      <Header />
      <Hero selectedVideo={selectedVideo} setSelected={setSelected} />
      <Main
        updatedVideos={videosWithoutSelectedVideo}
        selectedVideo={selectedVideo}
        setSelected={setSelected}
      />
    </>
  );
}

export default App;
