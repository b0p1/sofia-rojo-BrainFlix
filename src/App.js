import "./styles/global.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoPage from "./pages/VideoPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import UploadPage from "./pages/UploadPage/UploadPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VideoPage />} />
          <Route path="/videos/:id" element={<VideoPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
