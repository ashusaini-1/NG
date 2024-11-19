import React from 'react';
import bg1 from '../assets/images/bg_1.jpg';
import bg2 from '../assets/images/bg_2.jpg';
import img1 from '../assets/images/img_1.jpg';
import img2 from '../assets/images/img_2.jpg';
import img3 from '../assets/images/img_3.jpg';
import img4 from '../assets/images/img_4.jpg';

const Gallery = () => {
    return (
        <div>
            {/* Header Section */}
            <div className="block-31" style={{ position: 'relative' }}>
                <div className="owl-carousel loop-block-31">
                    <div
                        className="block-30 block-30-sm item"
                        style={{
                            backgroundImage: `url(${bg1})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        data-stellar-background-ratio="0.5"
                    >
                        <div className="container">
                            <div className="row align-items-center justify-content-center text-center">
                                <div className="col-md-7">
                                    <h2 className="heading">Our Gallery</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery Images */}
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        {[img1, img2, img3, img4, img1, img2, img1, img2, img3, img4, img1, img2].map((image, index) => (
                            <div className="col-md-4" key={index}>
                                <a href={image} className="img-hover" data-fancybox="gallery">
                                    <span className="icon icon-search"></span>
                                    <img src={image} alt={`Gallery ${index + 1}`} className="img-fluid" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Featured Section */}
            <div
                className="featured-section overlay-color-2"
                style={{
                    backgroundImage: `url(${bg2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-5 mb-md-0">
                            <img src={bg2} alt="Featured" className="img-fluid" />
                        </div>

                        <div className="col-md-6 pl-md-5">
                            {/* Volunteer Form */}
                            <div className="form-volunteer">
                                <h2>Be A Volunteer Today</h2>
                                <form action="#" method="post">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control py-2"
                                            id="name"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control py-2"
                                            id="email"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            name="v_message"
                                            id="v_message"
                                            cols="30"
                                            rows="3"
                                            className="form-control py-2"
                                            placeholder="Write your message"
                                        ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-white px-5 py-2" value="Send" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
