import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../Redux/post";
import "./Blog.css";
import { AiFillLike, AiFillEye } from "react-icons/ai";

export default function Blog() {
  const post = useSelector((state) => state.post.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost());
  }, []);

  return (
    <section className="main-blog">
      {!post.length && (
        <span
          style={{ fontSize: "1.5rem", textAlign: "center", display: "block" }}
        >
          No post to show
        </span>
      )}
      {post.map((el) => {
        return (
          <div className="blog-item" key={el._id}>
            <div className="blog-image">
              <img src={el.photos[0]} alt="" />
            </div>
            <div className="blog-content">
              <h1 className="blog-heading">{el.title}</h1>
              <p className="blog-description">
                {el.description.substring(0, 150).concat("....")}
              </p>
            </div>
            <div className="views-likes">
              <div className="views">
                <AiFillEye className="eye" />
                <span>1600</span>
              </div>
              <div className="likes">
                <AiFillLike className="thumb" />
                <span>{el.likes.length}</span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
