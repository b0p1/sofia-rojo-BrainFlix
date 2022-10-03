

function CommentCard({item}) {
    // console.log(item.name);
    return (
        <div className="comment-card">
        <div>
          <span className="comment-card__avatar">.</span>
          <h3 className="comment-card__name">{item.name}</h3>
          <h3 className="comment-card__date">{item.timestamp}</h3>
        </div>
        <div className="comment-card__content">
            <p>{item.comment}</p>
        </div>
      </div>
    );
}

export default CommentCard;