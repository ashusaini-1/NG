import React from "react";
import person1 from "../assets/images/person_1.jpg";
import bg1 from "../assets/images/bg_1.jpg";
import image10 from "../assets/images/img_7.jpg";

const DetailBlog = () => {
  return (
    <div>
      <div className="block-31" style={{ position: "relative" }}>
        <div className="owl-carousel loop-block-31">
          <div
            className="block-30 block-30-sm item"
            style={{ backgroundImage: `url(${bg1})` }}
            data-stellar-background-ratio="0.5"
          >
            <div className="container">
              <div className="row align-items-center justify-content-center text-center">
                <div className="col-md-12">
                  <span className="text-white text-uppercase">
                    July 30, 2018 &mdash; by Admin
                  </span>
                  <h2 className="heading mb-5">
                    Water Is Life. We Successfully Provide Clean Water in South
                    East Asia
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="blog" className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <p className="mb-4">
                <img src={bg1} alt="Background" className="img-fluid" />
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis, eius mollitia suscipit, quisquam doloremque
                distinctio perferendis et doloribus unde architecto optio
                laboriosam porro adipisci sapiente officiis nemo accusamus ad
                praesentium?
              </p>
              <h2 className="mb-3 mt-5">
                Molestiae cupiditate inventore animi, maxime sapiente optio
              </h2>
              <p>
                Temporibus ad error suscipit exercitationem hic molestiae totam
                obcaecati rerum, eius aut, in.
              </p>
              <p>
                <img src={image10} alt="Example" className="img-fluid" />
              </p>
              <p>
                Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum,
                quo velit commodi rerum eum quidem pariatur!
              </p>

              <div className="tag-widget post-tag-container mb-5 mt-5">
                <div className="tagcloud">
                  <a href="#" className="tag-cloud-link">
                    Charities
                  </a>
                  <a href="#" className="tag-cloud-link">
                    Donation
                  </a>
                  <a href="#" className="tag-cloud-link">
                    Child
                  </a>
                  <a href="#" className="tag-cloud-link">
                    School
                  </a>
                </div>
              </div>

              <div className="pt-5 mt-5">
                <h3 className="mb-5">6 Comments</h3>
                <ul className="comment-list">
                  <li className="comment">
                    <div className="vcard bio">
                      <img src={person1} alt="Jean Doe" />
                    </div>
                    <div className="comment-body">
                      <h3>Jean Doe</h3>
                      <div className="meta">January 9, 2018 at 2:21pm</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                      <p>
                        <a href="#" className="reply">
                          Reply
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="comment-form-wrap pt-5">
                  <h3 className="mb-5">Leave a Comment</h3>
                  <form action="#" className="">
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="website">Website</label>
                      <input
                        type="url"
                        className="form-control"
                        id="website"
                        placeholder="Enter your website"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        cols="30"
                        rows="10"
                        className="form-control"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Post Comment"
                        className="btn py-3 px-4 btn-primary"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-md-4 sidebar">
              <div className="sidebar-box">
                <form action="#" className="search-form">
                  <div className="form-group">
                    <span className="icon fa fa-search"></span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type a keyword and hit enter"
                    />
                  </div>
                </form>
              </div>
              <div className="sidebar-box">
                <div className="categories">
                  <h3>Categories</h3>
                  <li>
                    <a href="#">
                      Charity <span>(12)</span>
                    </a>
                  </li>
                </div>
              </div>
              <div className="sidebar-box">
                <img
                  src={person1}
                  alt="Author"
                  className="img-fluid mb-4 rounded"
                />
                <h3>About The Author</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div className="sidebar-box">
                <h3>Tag Cloud</h3>
                <div className="tagcloud">
                  <a href="#" className="tag-cloud-link">
                    Charities
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBlog;
