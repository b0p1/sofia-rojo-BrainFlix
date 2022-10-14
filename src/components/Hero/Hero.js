import "./hero.scss";

export default function Hero({ selectedVideo }) {
  return (
    <section className="hero">
      <video
        className="hero__video"
        controls
        poster={`http://localhost:8080/images/${selectedVideo.image}`}
      ></video>
    </section>
  );
}
