import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/HeaderNav/Header";
import Main from "../components/MainSection/Main/Main";
import Hero from "../components/Hero/Hero";

function VideoPage() {
  const URL = "http://localhost:8080/videos";

  const [videos, getVideos] = useState([]);
  const [selectedVideo, setSelected] = useState(null);

  const { id } = useParams();

  // Fetches data from api
  useEffect(() => {
    axios
      .get(`${URL}`)
      .then((resp) => {
        getVideos(resp.data);
        const videoId = id || resp.data[0].id;
        return axios.get(`${URL}/${videoId}`);
      })
      .then((resp) => {
        setSelected(resp.data);
      })
      .catch(() => {
        console.error("Error");
      });
  }, [id]);

  // Returns null when there is an empty object
  // --this allows the object to load before it is called in the other components
  if (!selectedVideo) {
    return null;
  }

  // filters through the videos and makes a new array without the selected video
  const videosWithoutSelectedVideo = videos.filter((video) => {
    if (selectedVideo !== undefined) {
      return video.id !== selectedVideo.id;
    }
  });
  return (
    <>
      <Header />
      <Hero selectedVideo={selectedVideo} />
      <Main
        updatedVideos={videosWithoutSelectedVideo}
        selectedVideo={selectedVideo}
      />
    </>
  );
}

export default VideoPage;
