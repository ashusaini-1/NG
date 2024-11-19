import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseEnter = (index) => {
        setActiveSubmenu(index);
    };

    const handleMouseLeave = () => {
        setActiveSubmenu(null);
    };

    const loadRazorpay = () => {
        const options = {
            key: "rzp_test_43yqE4W0vdNuQj", // Replace with your Razorpay key
            amount: 50000, // Amount in paise (e.g., 50000 = 500 INR)
            currency: "INR",
            name: "Your Company Name",
            description: "Donation",
            handler: function (response) {
                alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
            },
            prefill: {
                name: "Donor Name",
                email: "donor@example.com",
                contact: "9876543210",
            },
            theme: {
                color: "#3399cc",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'How It Works', path: '/how-it-works' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Blog', path: '/blog' },
        { name: 'About', path: '/about-us' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark bg-dark"
            style={{ position: 'sticky', top: 0, zIndex: 1000 }}
        >
            <div className="container">
                <Link className="navbar-brand" to="/">
                    DropDown
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {menuItems.map((item, index) => (
                            <li
                                className="nav-item"
                                key={index}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link to={item.path} className="nav-link">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button
                        className="btn btn-primary ml-3"
                        onClick={loadRazorpay}
                    >
                        Donate with Razorpay
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Header;
