import React from 'react';
import { Link } from 'react-router-dom';
import img4 from "../assets/images/img_4.jpg";
import img5 from "../assets/images/img_5.jpg";
import img6 from "../assets/images/img_6.jpg";
import bg1 from "../assets/images/bg_1.jpg";

const Blog = () => {
    return (
        <div>
            <div className="block-31" style={{ position: "relative" }}>
                <div className="owl-carousel loop-block-31">
                    <div
                        className="block-30 block-30-sm item"
                        style={{ backgroundImage: `url(${bg1})` }}
                    >
                        <div className="container">
                            <div className="row align-items-center justify-content-center text-center">
                                <div className="col-md-7">
                                    <h2 className="heading mb-5">Our Blog</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section bg-light">
                <div className="container">
                    <div className="row">
                        {[img4, img5, img6].map((image, index) => (
                            <div
                                key={index}
                                className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0"
                            >
                                <div className="post-entry">
                                    <Link to="/blog-details" className="mb-3 img-wrap">
                                        <img
                                            src={image}
                                            alt={`Blog post ${index + 1}`}
                                            className="img-fluid"
                                        />
                                    </Link>
                                    <h3>
                                        <Link to="/blog-details">
                                            {index === 0
                                                ? "Be A Volunteer Today"
                                                : index === 1
                                                ? "You May Save The Life of A Child"
                                                : "Children That Needs Care"}
                                        </Link>
                                    </h3>
                                    <span className="date mb-4 d-block text-muted">
                                        July 26, 2018
                                    </span>
                                    <p>
                                        Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia.
                                    </p>
                                    <p>
                                        <Link to="/blog-details" className="link-underline">
                                            Read More
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
