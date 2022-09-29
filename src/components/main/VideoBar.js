
export default function VideoBar (videos, setSelected){
    return(
        <section className="video-bar">
            <h3 className="video-bar__title">NEXT VIDEOS</h3>
            <div className="video-bar__list">
                <div className="video-card">
                    {videos.map((item)=>{
                        return(
                        <img src="item.image" />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}