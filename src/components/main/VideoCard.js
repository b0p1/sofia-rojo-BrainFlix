import "../../styles/main/video-card.scss";

export default function VideoCard({ item, setSelected }) {
  console.log(item);
  return (
    <div
      className="video-card"
      onClick={() => {
        setSelected(item);
      }}
    >
      <img className="video-card__img" src={item.image} />
      <div className="video-card__desc">
        <h3 className="video-card__desc__title">{item.title}</h3>
        <h3 className="video-card__desc__channel">{item.channel}</h3>
      </div>
    </div>
  );
}
