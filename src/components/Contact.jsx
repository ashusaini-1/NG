import React from 'react';
import bg2 from '../assets/images/bg_2.jpg';  // Dynamically import the image

const Contact = () => {
    return (
        <div>
            {/* Banner Section with Dynamic Image */}
            <div className="block-31" style={{ position: 'relative' }}>
                <div className="owl-carousel loop-block-31">
                    <div
                        className="block-30 block-30-sm item"
                        style={{
                            backgroundImage: `url(${bg2})`,  // Use the imported image dynamically
                        }}
                        data-stellar-background-ratio="0.5"
                    >
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-7 text-center">
                                    <h2 className="heading">Get In Touch</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="site-section">
                <div className="container">
                    <div className="row block-9">
                        <div className="col-md-6 pr-md-5">
                            <form action="#">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control px-3 py-3"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control px-3 py-3"
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control px-3 py-3"
                                        placeholder="Subject"
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        name=""
                                        id=""
                                        cols="30"
                                        rows="7"
                                        className="form-control px-3 py-3"
                                        placeholder="Message"
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="submit"
                                        value="Send Message"
                                        className="btn btn-primary py-3 px-5"
                                    />
                                </div>
                            </form>
                        </div>

                        {/* Google Maps Section */}
                        <div className="col-md-6">
                            <div className="map-container">
                                <iframe
                                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDVAVnUJdconxhIEZDDmOK42Jj31WV-QaY&q=New+York,USA"
                                    width="100%"
                                    height="450"
                                    frameBorder="0"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    aria-hidden="false"
                                    tabIndex="0"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
