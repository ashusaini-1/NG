import React from 'react'
import person1 from '../assets/images/person_1.jpg'
import person2 from "../assets/images/person_2.jpg"
import person3 from "../assets/images/person_3.jpg"

import person4 from "../assets/images/person_4.jpg"
import bg1 from "../assets/images/bg_1.jpg"
import bg2 from "../assets/images/bg_2.jpg"
import bg3 from "../assets/images/bg_3.jpg"

const AboutUs = () => {
    return (
        <div>
            <div className="block-31" style={{ position: "relative" }}>
                <div className="loop-block-31 ">
                    <div className="block-30 block-30-sm item"
                     style={{ backgroundImage: `url(${bg2})` }}
                        data-stellar-background-ratio="0.5">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-7 text-center">
                                    <h2 className="heading">About The Organization</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="site-section mb-5">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-12 mb-5"><h1>Our History</h1></div>
                        <div className="col-md-6">
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, necessitatibus officiis facere nisi et, ut adipisci a quis quisquam vitae doloremque tempora repellat quae accusantium atque eum voluptatibus aperiam cumque.</p>
                            <p>Quia ratione, eum harum ab similique mollitia, nisi itaque vel voluptas ipsam dolore perferendis. Deleniti voluptatum error possimus ipsum, sed, obcaecati. Sit unde quia eum repudiandae molestiae reprehenderit harum nesciunt.</p>

                        </div>
                        <div className="col-md-6">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, necessitatibus officiis facere nisi et, ut adipisci a quis quisquam vitae doloremque tempora repellat quae accusantium atque eum voluptatibus aperiam cumque.</p>
                            <p>Quia ratione, eum harum ab similique mollitia, nisi itaque vel voluptas ipsam dolore perferendis. Deleniti voluptatum error possimus ipsum, sed, obcaecati. Sit unde quia eum repudiandae molestiae reprehenderit harum nesciunt.</p>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-12 mb-5 text-center mt-5">
                            <h2>Leadership</h2>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="block-38 text-center">
                                <div className="block-38-img">
                                    <div className="block-38-header">
                                        <img src={person1} alt="Image placeholder" />
                                        <h3 className="block-38-heading">Greeg Graham</h3>
                                        <p className="block-38-subheading">CEO</p>
                                    </div>
                                    <div className="block-38-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="block-38 text-center">
                                <div className="block-38-img">
                                    <div className="block-38-header">
                                        <img src={person2} alt="Image placeholder" />
                                        <h3 className="block-38-heading">Jennifer Greive</h3>
                                        <p className="block-38-subheading">President</p>
                                    </div>
                                    <div className="block-38-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="block-38 text-center">
                                <div className="block-38-img">
                                    <div className="block-38-header">
                                        <img src={person3} alt="Image placeholder" />
                                        <h3 className="block-38-heading">Patrick Marx</h3>
                                        <p className="block-38-subheading">Marketer</p>
                                    </div>
                                    <div className="block-38-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="block-38 text-center">
                                <div className="block-38-img">
                                    <div className="block-38-header">
                                        <img src={person4} alt="Image placeholder" />
                                        <h3 className="block-38-heading">Mike Coolbert</h3>
                                        <p className="block-38-subheading">Partner</p>
                                    </div>
                                    <div className="block-38-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="site-section">
                <div className="container">
                    <div className="block-31 mb-5" style={{ position: "relative" }}>
                        <div className="owl-carousel loop-block-31">
                            <div
                                className="block-30 no-overlay item"
                                style={{ backgroundImage: `url(${bg2})` }}
                            ></div>
                            <div
                                className="block-30 no-overlay item"
                                style={{ backgroundImage: `url(${bg1})` }}
                            ></div>
                            <div
                                className="block-30 no-overlay item"
                                style={{ backgroundImage: `url(${bg3})` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section border-top">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4">
                            <div className="media block-6">
                                <div className="icon"><span className="ion-ios-bulb"></span></div>
                                <div className="media-body">
                                    <h3 className="heading">Our Mission</h3>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    <p><a href="#" className="link-underline">Learn More</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="media block-6">
                                <div className="icon"><span className="ion-ios-cash"></span></div>
                                <div className="media-body">
                                    <h3 className="heading">Make Donations</h3>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    <p><a href="#" className="link-underline">Learn More</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="media block-6">
                                <div className="icon"><span className="ion-ios-contacts"></span></div>
                                <div className="media-body">
                                    <h3 className="heading">We Need Volunteers</h3>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    <p><a href="#" className="link-underline">Learn More</a></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default AboutUs