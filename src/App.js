import './App.css';
import './styles/global.scss';
import Header from './components/Header';
import Hero from'./components/Hero';
import Main from './components/main/Main';
import videos from './data/videos.json'
import { useState } from 'react';

function App() {
  const [selectedVideo, setSelected] = useState(videos [0])
  return (
    <>
      <Header/>
      <Hero videos={selectedVideo}/>
      <Main videos={selectedVideo} setSelected={setSelected}/>
    </>
  );
}

export default App;
