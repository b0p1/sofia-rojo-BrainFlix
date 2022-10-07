import "../styles/hero.scss";

export default function Hero({ selectedVideo }) {
  return (
    <section className="hero">
      <video
        className="hero__video"
        controls
        poster={selectedVideo.image}
      ></video>
    </section>
  );
}
