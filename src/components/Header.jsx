import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    const handleMouseEnter = (index) => {
        setActiveSubmenu(index);
    };

    const handleMouseLeave = () => {
        setActiveSubmenu(null);
    };

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'How It Works', path: '/how-it-works' },
        { name: 'Donate', path: '/donate' },
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
                                style={{ position: 'relative' }}
                            >
                                <Link to={item.path} className="nav-link">
                                    {item.name}
                                </Link>
                                {activeSubmenu === index && (
                                    <div
                                        className="submenu"
                                        style={{
                                            position: 'absolute',
                                            left: 0,
                                            backgroundColor: '#343a40',
                                            padding: '20px',
                                            borderRadius: '5px',
                                            zIndex: 1000,
                                        }}
                                    >
                                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                                            <li style={{ margin: '5px 0' }}>
                                                <Link to={`${item.path}/sub1`} className="nav-link text-white">
                                                    Submenu 
                                                </Link>
                                            </li>
                                            <li style={{ margin: '5px 0' }}>
                                                <Link to={`${item.path}/sub2`} className="nav-link text-white">
                                                    Submenu 
                                                </Link>
                                            </li>
                                            <li style={{ margin: '5px 0' }}>
                                                <Link to={`${item.path}/sub3`} className="nav-link text-white">
                                                    Submenu 
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
