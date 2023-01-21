import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../Redux/post";
import "./Blog.css";
import { useNavigate } from "react-router-dom";

export default function Blog() {
  const post = useSelector((state) => state.post.post);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(post);

  useEffect(() => {
    dispatch(getPost());
  }, []);

  function handleBlogClick(id) {
    navigate(`/blog/${id}`);
  }

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
          <div
            className="blog-item"
            key={el._id}
            onClick={handleBlogClick.bind(null, el._id)}
          >
            <div className="blog-image">
              <img src={el.photos[0]} alt="" />
            </div>
            <div className="blog-content">
              <div className="blog-top">
                <h1 className="blog-heading">{el.title.substring(0, 48)}</h1>
                <div className="blogauthor">
                  <span>By {el.author.name}</span>
                </div>
              </div>

              <p className="blog-description">
                {el.description.substring(0, 200).replace(/(<([^>]+)>)/gi, "")}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
