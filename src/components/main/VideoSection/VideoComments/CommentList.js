import CommentCard from "./CommentCard";
import '../../../../styles/main/comment-section/comment-list.scss'

function CommentList({ selectedVideo }) {
//   console.log(selectedVideo);
  const videoComments = selectedVideo.comments
//   console.log(videoComments);
  const commentMap =videoComments.map((item) => {
    return <CommentCard key={item.id} item={item}/>;
  });
//   console.log(commentMap);
  return (
    <div className="comment-section__list">
      {commentMap}
    </div>
  );
}

export default CommentList;
