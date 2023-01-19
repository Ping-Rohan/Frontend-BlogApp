import "./Homepage.css";

export default function Homepage() {
  return (
    <>
      <section className="homepage">
        <div className="container">
          <form className="create-post" action="#">
            <h1>Write Your Own Blog</h1>
            <div className="input">
              <input type="text" placeholder="Your blog title" />
            </div>
            <div className="input">
              <textarea
                placeholder="Your blog description"
                rows="10"
              ></textarea>
            </div>
            <button className="btn-primary">Post</button>
          </form>
          <div className="fetched-blog">
            <h1>Blogs you may like </h1>
            <div className="blogs">
              <div className="blog-box">
                <h2 className="blog-title">How to hack wifi</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
