import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Parser from "html-react-parser";
import "./singleBlog.css";
import { useState } from "react";
import { commentOnPost } from "../Redux/post";

export default function SingleBlog() {
  const [userComment, setComment] = useState("");
  const params = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    state.post.post.filter((el) => el._id === params.id)
  );

  function handleComment(e) {
    setComment(e.target.value);
  }

  function handlePostComment() {
    const commentJson = {
      comment: userComment,
    };
    dispatch(commentOnPost(params.id, commentJson));
    setComment("");
  }

  const comment = post[0].comment;

  return (
    <section className="single-blog">
      <div className="container">
        <div className="post-topbar">
          <h1 className="singlePost-heading">{post[0].title}</h1>
          <span>Author : {post[0].author.name}</span>
        </div>
        <div className="singlePost-img">
          <img src={post[0].photos[0]} alt="" />
        </div>
        <div className="singlePost-description">
          {Parser(post[0].description)}
        </div>
        <div className="comments">
          <h2>Comments</h2>
          <div className="post-comment">
            <input type="text" onChange={handleComment} value={userComment} />
            <button onClick={handlePostComment}>Comment</button>
          </div>
          {!post[0].comment.length && (
            <span className="no-comment">This post has no comments</span>
          )}
          <div className="comment-wrapper">
            {comment.map((com, i) => {
              return (
                <div className="comment-box" key={i}>
                  <div className="comment-image">
                    <img src={com.commentedBy.profileImage} alt="commentator" />
                  </div>
                  <div className="comment-text">
                    <h2 className="commentator">{com.commentedBy.name}</h2>
                    <p className="actual-comment">{com.comment}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
