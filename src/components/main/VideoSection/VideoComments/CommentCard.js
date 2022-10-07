import "../../../../styles/main/comment-section/comment-card.scss";

function CommentCard({ item }) {
  return (
    <div className="comment-card">
      <div className="comment-card__titles">
        <span className="comment-card__titles__avatar"> </span>
        <h3 className="comment-card__titles__name">{item.name}</h3>
        <h3 className="comment-card__titles__date">
          {formatDate(new Date(item.timestamp))}
        </h3>
      </div>
      <div className="comment-card__content">
        <p>{item.comment}</p>
      </div>
    </div>
  );
}

function formatDate(date) {
  let timeStampDate = String(date.getDate()).padStart(2, "0");
  let timeStampMonth = String(date.getMonth() + 1).padStart(2, "0");
  let timeStampYear = date.getFullYear();

  let timeStampString =
    timeStampMonth + "/" + timeStampDate + "/" + timeStampYear;

  return timeStampString;
}

export default CommentCard;
