import ProfileAvatar from "../../../../assets/images/Mohan-muruge.jpg";

function CommentForm() {
  return (
    <div className="comment-section__form">
      <form>
        <label htmlFor="comment-box"> JOIN THE CONVERSATION </label>
        <textarea id="comment-box" className="comment-box"></textarea>
        <div className="comment-button__container">
          <img src={ProfileAvatar} alt="Profile Avatar"></img>
          <button className="comment-button"> COMMENT</button>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
