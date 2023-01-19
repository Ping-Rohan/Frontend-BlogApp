import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../Redux/post";

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
              <img src={el.image} alt="" />
            </div>
            <div className="blog-content">
              <h1 className="blog-heading">{el.title}</h1>
              <p className="blog-description">{el.description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
