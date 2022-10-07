import CommentCard from "./CommentCard";
import "../../../../styles/main/comment-section/comment-list.scss";

function CommentList({ selectedVideo }) {
  const videoComments = selectedVideo.comments;

  const commentMap = videoComments.map((item) => {
    return <CommentCard key={item.id} item={item} />;
  });

  return <div className="comment-section__list">{commentMap}</div>;
}

export default CommentList;
