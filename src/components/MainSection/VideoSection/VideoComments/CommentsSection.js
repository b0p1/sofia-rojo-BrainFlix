import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

function CommentsSection({ selectedVideo }) {
  return (
    <section className="comment-section">
      <CommentForm />
      <CommentList selectedVideo={selectedVideo} />
    </section>
  );
}

export default CommentsSection;
