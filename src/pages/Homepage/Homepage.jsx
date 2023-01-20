import "./Homepage.css";
import Blog from "../../Blog/Blog";
import { createPost } from "../../Redux/post";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function Homepage() {
  return (
    <>
      <section className="homepage">
        <div className="container">
          {/* <form className="create-post" action="#" onSubmit={handleSubmit}>
            <h1>Write Your Own Blog</h1>
            <div className="input">
              <input
                type="text"
                placeholder="Your blog title"
                onChange={handleChange}
                name="title"
                value={values.title}
              />
            </div>
            <div className="input">
              <textarea
                placeholder="Your blog description"
                rows="10"
                onChange={handleChange}
                name="description"
                value={values.description}
              ></textarea>
            </div>
            <input type="file" name="" id="" onChange={handleImageChange} />
            <button className="btn-primary" type="submit">
              Post
            </button>
          </form> */}
          <div className="fetched-blog">
            <Blog />
          </div>
        </div>
      </section>
    </>
  );
}
