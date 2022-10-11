import CommentForm from "./CommentForm/CommentForm";
import CommentList from "./CommentList/CommentList";

function CommentsSection({ selectedVideo }) {
  return (
    <section className="comment-section">
      <CommentForm />
      <CommentList selectedVideo={selectedVideo} />
    </section>
  );
}

export default CommentsSection;
