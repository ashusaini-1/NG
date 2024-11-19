import React from "react";
import person1 from "../assets/images/person_1.jpg";
import person2 from "../assets/images/person_2.jpg";
import person3 from "../assets/images/person_3.jpg";
import person4 from "../assets/images/person_4.jpg";
import bg2 from "../assets/images/bg_2.jpg";

const Donate = () => {
  return (
    <div>
      <div className="block-31" style={{ position: "relative" }}>
        <div className="owl-carousel loop-block-31">
          <div
            className="block-30 block-30-sm item"
            style={{
              backgroundImage: `url(${bg2})`,
            }}
            data-stellar-background-ratio="0.5"
          >
            <div className="container">
              <div className="row align-items-center justify-content-center text-center">
                <div className="col-md-7">
                  <h2 className="heading">Better To Give Than To Receive</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section fund-raisers">
        <div className="container">
          <div className="row mb-3 justify-content-center">
            <div className="col-md-8 text-center">
              <h2>Latest Donations</h2>
              <p className="lead">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p className="mb-5">
                <a href="#" className="link-underline">
                  View All Donations
                </a>
              </p>
            </div>
          </div>

          <div className="row">
            {[person1, person2, person3, person4].map((image, index) => (
              <div className="col-md-6 col-lg-3 mb-5" key={index}>
                <div className="person-donate text-center">
                  <img src={image} alt="Donor" className="img-fluid" />
                  <div className="donate-info">
                    <h2>
                      {["Jorge Smith", "Christine Charles", "Albert Sluyter", "Andrew Holloway"][index]}
                    </h2>
                    <span className="time d-block mb-3">
                      {["Donated Just now", "Donated 1 hour ago", "Donated 4 hours ago", "Donated 9 hours ago"][index]}
                    </span>
                    <p>
                      Donated{" "}
                      <span className="text-success">
                        {["$252", "$400", "$1,200", "$100"][index]}
                      </span>{" "}
                      <br /> <em>for</em>{" "}
                      <a href="#" className="link-underline fundraise-item">
                        {
                          [
                            "Water Is Life. Clean Water In Urban Area",
                            "Children Needs Education",
                            "Need Shelter for Children in Africa",
                            "Water Is Life. Clean Water In Urban Area",
                          ][index]
                        }
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
              <img src={bg2} alt="Background" className="img-fluid" />
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

export default Donate;
