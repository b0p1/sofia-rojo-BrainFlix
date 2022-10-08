import "./styles/global.scss";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import VideoPage from "./pages/VideoPage";
import NotFound from "./pages/NotFoundPage";
import UploadPage from "./pages/UploadPage/UploadPage"

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<VideoPage />} />
        <Route path="/videos/:id" element={<VideoPage />} />
        <Route path="/upload" element={<UploadPage/>}/>
        <Route path="*" component={NotFound} /> 
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
