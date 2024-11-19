import React from 'react';
import bg1 from '../assets/images/bg_1.jpg';
import bg2 from '../assets/images/bg_2.jpg';
import person1 from '../assets/images/person_1.jpg';
import person2 from '../assets/images/person_2.jpg';
import person3 from '../assets/images/person_3.jpg';
import person4 from '../assets/images/person_4.jpg';

const HowItWork = () => {
    const donations = [
        {
            name: 'Jorge Smith',
            time: 'Just now',
            amount: '$252',
            cause: 'Water Is Life. Clean Water In Urban Area',
            image: person1,
        },
        {
            name: 'Christine Charles',
            time: '1 hour ago',
            amount: '$400',
            cause: 'Children Needs Education',
            image: person2,
        },
        {
            name: 'Albert Sluyter',
            time: '4 hours ago',
            amount: '$1,200',
            cause: 'Need Shelter for Children in Africa',
            image: person3,
        },
        {
            name: 'Andrew Holloway',
            time: '9 hours ago',
            amount: '$100',
            cause: 'Water Is Life. Clean Water In Urban Area',
            image: person4,
        },
    ];

    return (
        <div>
            <div className="block-31" style={{ position: 'relative' }}>
                <div className="owl-carousel loop-block-31">
                    <div
                        className="block-30 block-30-sm item"
                        style={{ backgroundImage: `url(${bg1})` }}
                        data-stellar-background-ratio="0.5"
                    >
                        <div className="container">
                            <div className="row align-items-center justify-content-center text-center">
                                <div className="col-md-7">
                                    <h2 className="heading mb-5">How It Works</h2>
                                    <p style={{ display: 'inline-block' }}>
                                        <a
                                            href="https://vimeo.com/channels/staffpicks/93951774"
                                            data-fancybox
                                            className="ftco-play-video d-flex"
                                        >
                                            <span className="play-icon-wrap align-self-center mr-4">
                                                <span className="ion-ios-play"></span>
                                            </span>{' '}
                                            <span className="align-self-center">How It Works</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section">
                <div className="container">
                    {[bg1, bg2].map((image, index) => (
                        <div className="row align-items-center mb-5" key={index}>
                            <div className={`col-md-7 ${index % 2 === 0 ? 'order-md-2' : ''} mb-5 mb-md-0`}>
                                <img src={image} alt="" className="img-fluid" />
                            </div>
                            <div className={`col-md-5 ${index % 2 === 0 ? 'pr-md-5 order-md-1' : 'pl-md-5'}`}>
                                <div className="block-41">
                                    <div className="block-41-subheading d-flex">
                                        <div className="block-41-number">Step 0{index + 1}</div>
                                    </div>
                                    <h2 className="block-41-heading mb-3">
                                        {index === 0
                                            ? 'Create Your Fundraising Campaign'
                                            : 'Share with Family and Friends'}
                                    </h2>
                                    <div className="block-41-text">
                                        <p>
                                            Far far away, behind the word mountains, far from the countries Vokalia and
                                            Consonantia, there live the blind texts. Separated they live in
                                            Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="site-section fund-raisers">
                <div className="container">
                    <div className="row mb-3 justify-content-center">
                        <div className="col-md-8 text-center">
                            <h2>Latest Donations</h2>
                            <p className="lead">
                                Some quick example text to build on the card title and make up the bulk of the card's
                                content.
                            </p>
                            <p className="mb-5">
                                <a href="#" className="link-underline">
                                    View All Donations
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {donations.map((donation, index) => (
                            <div className="col-md-6 col-lg-3 mb-5" key={index}>
                                <div className="person-donate text-center">
                                    <img src={donation.image} alt="Image placeholder" className="img-fluid" />
                                    <div className="donate-info">
                                        <h2>{donation.name}</h2>
                                        <span className="time d-block mb-3">Donated {donation.time}</span>
                                        <p>
                                            Donated <span className="text-success">{donation.amount}</span> <br />{' '}
                                            <em>for</em>{' '}
                                            <a href="#" className="link-underline fundraise-item">
                                                {donation.cause}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div
                className="featured-section overlay-color-2"
                style={{ backgroundImage: `url(${bg2})` }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-5 mb-md-0">
                            <img src={bg2} alt="Image placeholder" className="img-fluid" />
                        </div>
                        <div className="col-md-6 pl-md-5">
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
                                            type="text"
                                            className="form-control py-2"
                                            id="email"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            name="v_message"
                                            cols="30"
                                            rows="3"
                                            className="form-control py-2"
                                            placeholder="Write your message"
                                        ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="submit"
                                            className="btn btn-white px-5 py-2"
                                            value="Send"
                                        />
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

export default HowItWork;
