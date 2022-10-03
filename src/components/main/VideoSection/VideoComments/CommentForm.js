import ProfileAvatar from "../../../../assets/images/Mohan-muruge.jpg";
import CommentIcon from "../../../../assets/icons/add_comment.svg"
import '../../../../styles/main/comment-section/comment-form.scss'

function CommentForm() {
  return (
    <div className="comment-section__form">
      <img className="comment-avatar" src={ProfileAvatar} alt="Profile Avatar"></img>
      <form className="comment-from">
        <label className="comment-label" htmlFor="comment-box"> JOIN THE CONVERSATION </label>
        <textarea id="comment-box" className="comment-box" autoComplete="off" placeholder="Add a new comment" cols={30} rows={1} ></textarea>
        <div className="comment-button__container">
          <img className="comment-button__icon" src={CommentIcon} alt="Comment Icon"></img>
          <button className="comment-button"> COMMENT</button>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
