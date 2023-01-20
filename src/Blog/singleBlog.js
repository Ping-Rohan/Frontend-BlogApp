import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AiFillLike } from "react-icons/ai";
import { toggleLike } from "../Redux/post";
import { useState } from "react";
import "./singleBlog.css";

export default function SingleBlog() {
  const params = useParams();
  const post = useSelector((state) =>
    state.post.post.filter((el) => el._id === params.id)
  );

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
          <p>{post[0].description}</p>
        </div>
        <div className="comments">
          <h2>Comments</h2>
          <div className="post-comment">
            <textarea name="" id="" cols="30" rows="6"></textarea>
            <button>Comment</button>
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
