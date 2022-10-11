import "./video-card.scss";
import { Link } from "react-router-dom";

export default function VideoCard({ item }) {
  return (
    <Link to={`/videos/${item.id}`}>
      <div className="video-card">
        <img className="video-card__img" src={item.image} alt={item.title} />
        <div className="video-card__desc">
          <h3 className="video-card__desc__title">{item.title}</h3>
          <h3 className="video-card__desc__channel">{item.channel}</h3>
        </div>
      </div>
    </Link>
  );
}
