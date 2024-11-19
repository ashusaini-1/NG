import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer bg-dark text-white py-5">
            <div className="container">
                <div className="row">
                    {/* About Us Section */}
                    <div className="col-md-6 col-lg-3">
                        <h3 className="heading-section">About Us</h3>
                        <p>Our NGO is dedicated to making a positive impact on communities through sustainable projects, education, healthcare, and environmental protection.</p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="col-md-6 col-lg-3">
                        <h3 className="heading-section">Quick Links</h3>
                        <ul className="list-unstyled">
                            <li><Link to="/donate" className="text-white">Donate</Link></li>
                            <li><Link to="#" className="text-white">Volunteer</Link></li>
                            <li><Link to="/contact" className="text-white">Contact Us</Link></li>
                            <li><Link to="/our-projects" className="text-white">Our Projects</Link></li>
                            <li><Link to="/terms-conditions" className="text-white">Terms and Conditions</Link></li>
                            <li><Link to="/privacy-policy" className="text-white">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Subscription Section */}
                    <div className="col-md-6 col-lg-3">
                        <h3 className="heading-section">Subscribe to Our Newsletter</h3>
                        <p>Stay updated with our latest news and events. Join our newsletter for regular updates.</p>
                        <form action="#">
                            <input type="email" className="form-control mb-2" placeholder="Your Email" />
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                        </form>
                    </div>

                    {/* Contact Info Section */}
                    <div className="col-md-6 col-lg-3">
                        <h3 className="heading-section">Contact Us</h3>
                        <ul className="list-unstyled">
                            <li><span className="icon icon-map-marker"></span>123 NGO Street, City, Country</li>
                            <li><a href="tel:+1234567890"><span className="icon icon-phone"></span>+1 (234) 567-890</a></li>
                            <li><a href="mailto:info@ngoemail.org"><span className="icon icon-envelope"></span>info@ngoemail.org</a></li>
                        </ul>
                        <div className="social-icons mt-3">
                            <a href="#" className="text-white mr-3"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="text-white mr-3"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-white mr-3"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-white mr-3"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="row pt-4">
                    <div className="col-md-12 text-center">
                        <p>
                            Copyright &copy; {new Date().getFullYear()} All rights reserved | Designed by <a href="https://yourwebsite.com" className="text-white">Your NGO</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
