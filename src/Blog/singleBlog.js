import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./singleBlog.css";

export default function SingleBlog() {
  const params = useParams();
  const post = useSelector((state) =>
    state.post.post.filter((el) => el._id === params.id)
  );

  console.log(post);

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
      </div>
    </section>
  );
}
