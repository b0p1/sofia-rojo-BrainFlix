import VideoCard from "./VideoCard";
import "../../styles/main/video-bar.scss";

export default function VideoBar({ videoDetails, setSelected }) {
  // console.log(videos);
  const videoMap = videoDetails.map((item) => {
    return <VideoCard key={item.id} item={item} setSelected={setSelected} />;
  });
  return (
    <>
      <section className="video-bar">
        <h3 className="video-bar__title">NEXT VIDEOS</h3>
        <div className="video-bar__list">{videoMap}</div>
      </section>
      <aside className="video-bar-aside">
        <h3 className="video-bar-aside__title">NEXT VIDEOS</h3>
        <div className="video-bar-aside__list">{videoMap}</div>
      </aside>
    </>
  );
}
