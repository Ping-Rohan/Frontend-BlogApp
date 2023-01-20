import React, { useState } from "react";
import "./CreatePost.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { BsCameraFill } from "react-icons/bs";
import { createPost } from "../Redux/post";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

export default function CreatePost() {
  const [postImages, setPostImages] = useState([]);

  const dispatch = useDispatch();
  const { handleChange, handleSubmit, values, setFieldValue } = useFormik({
    initialValues: {
      title: "",
      description: "",
    },

    onSubmit: (value, action) => {
      console.log(value);
      let form = new FormData();
      form.append("image", postImages);
      form.append("document", JSON.stringify(value));

      dispatch(createPost(form));
      action.resetForm();
    },
  });

  function handleImageChange(e) {
    setPostImages(e.target.files[0]);
  }

  return (
    <section className="create-post">
      <form action="" onSubmit={handleSubmit}>
        <div className="container">
          <div>
            <label htmlFor="">Your blog title</label>
            <input
              type="text"
              onChange={handleChange}
              name="title"
              value={values.title}
            />
          </div>
          <div>
            <label htmlFor="">Describe your blog</label>
            <ReactQuill
              theme="snow"
              className="quill"
              placeholder="Blog description"
              onChange={(e) => setFieldValue("description", e)}
            />
          </div>
          <div className="thumbnail">
            <label htmlFor="">Your blog thumbnail</label>
            <input
              type="file"
              className="fileinput"
              onChange={handleImageChange}
            />
            <BsCameraFill className="uploadthumbnail" />
          </div>
          <button type="submit">Post</button>
        </div>
      </form>
    </section>
  );
}
