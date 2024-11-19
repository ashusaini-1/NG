import React, { useEffect,useState } from 'react';
import bg1 from '../assets/images/bg_1.jpg'; // Adjust the path as per your directory structure
import img1 from '../assets/images/img_1.jpg';
import img7 from '../assets/images/img_7.jpg';
import img3 from '../assets/images/img_3.jpg';
import img4 from '../assets/images/img_4.jpg';
import img6 from '../assets/images/img_6.jpg';
import OwlCarousel from 'react-owl-carousel'

const Index = () => {

  const [count, setCount] = useState(0);
  const target = 1321901;  // Target value for the counter

  useEffect(() => {
    const increment = Math.ceil(target / 100); // Increment per frame
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < target) {
          return Math.min(prevCount + increment, target);  // Ensure we don't exceed the target
        } else {
          clearInterval(interval);
          return target;
        }
      });
    }, 10);  // Adjust the speed of the animation (10ms interval)

    return () => clearInterval(interval);  // Cleanup on unmount
  }, []);

  const imageStyle = {
    width: '100%',
    height: '90vh',
    objectFit: 'cover',
    transition: 'transform 0.5s ease-in-out, opacity 1s ease-in-out', // Add opacity transition
  };
  const fundraisers = [
    {
      img: img1,
      title: 'Water Is Life. Clean Water In Urban Area',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      progress: 28,
      raised: '$12,000',
      goal: '$30,000',
    },
    {
      img: img7,
      title: 'Need Shelter for Children in Africa',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      progress: 28,
      raised: '$12,000',
      goal: '$30,000',
    },
    {
      img: img3,
      title: 'Children Needs Education',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      progress: 28,
      raised: '$12,000',
      goal: '$30,000',
    },
    {
      img: img4,
      title: 'Refugees Needs Food',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      progress: 28,
      raised: '$12,000',
      goal: '$30,000',
    },
    {
      img: img6,
      title: 'Volunteer',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      progress: 28,
      raised: '$12,000',
      goal: '$30,000',
    },
  ];
  const banner = [img1, img3, img4, img6]
  const newsItems = [img1, img3, img4, img6]

  return (
    <div>
      {/* Carousel Section */}
      <OwlCarousel
        // style={carouselContainerStyle}
        dots={false}
        autoplay={true}
        rewind={true}
        responsiveClass={true}
        loop={true}
        autoplayTimeout={5000}
        smartSpeed={800}
        nav={false}
        margin={15}
        responsive={{
          0: { items: 1 },
          600: { items: 1 },
          1024: { items: 1 },
          1366: { items: 1 },
        }}
      >
        {banner && banner.length > 0 &&
          banner.map((key, index) => (
            <div key={index}>
              <img src={key} alt={`Banner ${index + 1}`} style={imageStyle} />
            </div>
          ))
        }
      </OwlCarousel>

      {/* Welcome Section */}
      <div className="site-section section-counter">
        <div className="container">
          <div className="row">
            <div className="col-md-6 pr-5">
              <div className="block-48">
                <span className="block-48-text-1">Served Over</span>
                <div className="block-48-counter ftco-number" data-number="1321901">          {count.toLocaleString()} {/* Display the number with commas */}
                </div>
                <span className="block-48-text-1 mb-4 d-block">Children in 150 Countries</span>
                <p className="mb-0">
                  <a href="#" className="btn btn-white px-3 py-2">View Our Program</a>
                </p>
              </div>
            </div>
            <div className="col-md-6 welcome-text">
              <h2 className="display-4 mb-3">Who Are We?</h2>
              <p className="lead">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                ocean.
              </p>
              <p className="mb-4">
                A small river named Duden flows by their place and supplies it with the necessary regelialia.
              </p>
              <p className="mb-0">
                <a href="#" className="btn btn-primary px-3 py-2">Learn More</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fundraisers Section */}
      <div className="site-section fund-raisers bg-light">
        <div className="container">
          <div className="row mb-3 justify-content-center">
            <div className="col-md-8 text-center">
              <h2>Latest Fundraisers</h2>
              <p className="lead">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <p>
                <a href="#" className="link-underline">View All Fundraisers</a>
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="col-md-12 block-11">
            <div className="nonloop-block-11 ">
              <OwlCarousel
                className="fundraiser-carousel"
                dots={false}
                autoplay={true}
                rewind={true}
                loop={true}
                autoplayTimeout={4000}
                smartSpeed={800}
                nav={false}
                margin={30}
                responsive={{
                  0: { items: 1 },
                  600: { items: 2 },
                  1024: { items: 3 },
                  1366: { items: 4 },
                }}
              >
                {fundraisers.map((fundraiser, index) => (
                  <div className="card fundraise-item" key={index}>
                    <a href="#">
                      <img className="card-img-top" src={fundraiser.img} alt={`Fundraiser ${index + 1}`} />
                    </a>
                    <div className="card-body">
                      <h3 className="card-title">
                        <a href="#">{fundraiser.title}</a>
                      </h3>
                      <p className="card-text">{fundraiser.text}</p>
                      <span className="donation-time mb-3 d-block">Last donation 1w ago</span>
                      <div className="progress custom-progress-success">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: `${fundraiser.progress}%` }}
                          aria-valuenow={fundraiser.progress}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span className="fund-raised d-block">
                        {fundraiser.raised} raised of {fundraiser.goal}
                      </span>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
        <div className="site-section we-love-our-clients">
          <div className="container text-center">
            <h2 className="mb-4">We Love Our Clients</h2>
            <p className="lead mb-4">
              Our clients are at the heart of everything we do. We value their trust and strive to deliver the best experience every time.
            </p>
            <div className="row justify-content-center">
              {/* Client Logos */}
              <div className="col-md-2">
                <div className="client-logo">
                  <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBESEhIPExMXFxIRFxASExAVEBYXFxUiGhYTExMYKCggGBolHhUYLTEiJSkrLi4uFx83ODMsOCk5LisBCgoKDg0OGhAQGy8lICUvLS4tLS0tLS0uLS8uLS0tLy0tLy0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAEDBQYHAgj/xAA9EAABAwIEAwUGBAQFBQAAAAABAAIDBBEFEiExBkFREyJhgZEHMkJScaEUYpKxI3KC0UNTwvDxFSSjsuH/xAAbAQEAAwEBAQEAAAAAAAAAAAAAAwQFAQIGB//EADQRAQACAQMCBAMHAwQDAAAAAAABAgMEETESIQUiQVETYbEycZGhwdHwI4HxFEKC4QYVJP/aAAwDAQACEQMRAD8A7e1osNAgrlHQIGUdAgZR0CBlHQIGUdAgZR0CBlHQIGUdAgZR0CBlHQIGUdAgZR0CBlHQIGUdAgZR0CBlHQIGUdAgZR0CBlHQIGUdAgZR0CBlHQIGUdAgZR0CBlHQIGUdAgZR0CCNlHQIJLdggqgICAgICAgICAgICAgICAgICAgICAgICAgICCMgkN2CCqAgICAgICAgICAgICAgICAgICAgICAgICAgIIyCQ3YIKoCAgICAgICAgICAgICAgICAgICAgICAgICAgjIJDdggqgICAgICAgICAgICAgICAgICAgICAgICAgICCMgkN2CCqAgICAgICAgICAgICAgICCjnAC5IA6nQJEbkRuxdRxJRsNnVVOD07RhPoFPXS5rcUn8E9dLmt3ik/gtQcWUT3ZWVEbj0aHE/su20masb2rMO20mave1Zhl4pQ4XG30I+xUExtygmNuXtccEBAQEBAQRkEhuwQVQEBAQEBAQEBAQEBAQEEPFMUhp2GSaRrG+O5PRrRq4+AUmLFfLbppG8pMWK+W3TSN5c8x32kSOu2mYI27drIA6Q+LWe63zv5LZweFVjvlnf5Q2MPhdKR1Zp/tDVi6prHZpZJHNPxyEuH9EdwPSwTUeIaXReWsd/aP1lfpFaR/SrENkwnDaOKxdTvqHdZpO55RNGW31usHUf+Q5r/ZjaPkr5a6i/+/b7o/VuFBjsTQGtgEbekeS3pYLOnxWJnzxP1Z2TQ3nv1bszS4jHJ7rtflOh/wDqs4tZhy9qz39pUsmC9OYS1ZRCAgICAgIIyCQ3YIKoCAgICAgICAgICAgINY4u4wjoxkbaSci4jv3Wg7OkI2HhufDdXdJorZ53ntX3/Zc0uktmnee0e/7OQ4vjMs8hkmeZJDt0aD8LWj3R4BfQUpjwV6aRt/PVuRbHgr0Y4/nzXsPw/Z8up5NOw+q+f8Q8VtbemHj3/ZLTFM+a/LORTN6jy1XzlqWlJNZTqedtxe9uoA/ZV7Y59UVqzs2fC8MilHdnBPy5MrvQle8eipk4v+TLz6nJj5p+bLswFo+N3oFJPhFJ/wB0qk660+kMhTQFmmcuHQjUeavafBbFG03mY+ate8W77bL6soxAQEBAQRkEhuwQVQEBAQEBAQEBAQEBBp3HXGIpAYYSHVBG+7YgficObug8z0OhotFOaeq32fqtabT9c724cbra0lziXFz3Euc5xubnck8yt7eKx01aWTURSOmv+FKJwb3jq7lfW3j9Vi63U9f9Os9vX5r+h00RHxMnM8MhHUX3JKy5p7Q0ZmPRPp6hvU+hUF8N5RWZOnqmfN9iql9Nl9kFqy2GgpnloexrnDk9lyPVuxVDJgzVnfplSyZce/TafxbPheKnRkt+gedD/V/dWNP4jNZ6M34/uy8+lj7WP8GcC2VAQEBAQEBBGQSG7BBVAQEBAQEHiaUMaXONgAST4Lza0VjeXa1m07Q06vx6SQnK4sbyDTY+ZHNYmbV5Mk+WdobWHRUpHmjeURmJSt1Ekn6iR6FQ1y5a8WlPOnxzzWGTouJ3t0lAePmFg702P2VzFr7x2vG6pl8OrPek7Nko62OVuaNwcOY5j6jktPHlrkjesszJivjna0Nc474tbRRhjLOqHjuN3DB/mPHToOZ8AVo6PSTmtvP2Y/mzuLH1T34cRraxxLnOcXPcS4udqSTu4lfQdqRtC7fNFK7QiU7bm5/5KztZqOivTHMpvDtP8a/XbiPzlLCxn0a/FIOq68zCdA4HYhIeZTYguvEsthOISwPzxOLTzHwu8HN5ptugzYKZa7Xh0jA8bjqm2IAkA70Z1H8zeo/ZRXxxPaY3fO6nS309vl7suxgAsBYdF5rWKxtHCrM78vS9OCAgICAgjIJDdggqgICAgICDW+MsQa2MRBwuSHOF9mja/TW3oqOtv5eiPVpeHYZtfrmO0fVpLsRYPi+xWd8GW10y9x1bXbOB8Ofok45jk6XsyrnSbI1XjppQJGuIfs0A7nx/L1Wh4do8mfLtTtEcyq6u+OuPa8b+0NGxLEXzSPmmcXPccznH7ADkBsAvuqVrjr014hixeKww0s17uP8AvwXibb90EWnJb7ymrnbWaR05rPzaeuS3VM92/p9RbDSKREbQnR1IO4I+6qW0to47r9NbSftRsvg3Ve1LV5haretvsyvxtXl6ZnB6/snd+Nk0Z96N+ht1Y8asP006hd3QZ8M5I8szE+/7x6uh0fDdJVRCWllkYDpldZ2U82uB1B806tmJfXZ8F+jLESsP4cqoHB8dn5TcOjPeH9J18tV2LRKaNdgzV6b9t/dtuDYkJmajLI3R7DcEHrY62K8TGzI1GD4Vu3eJ4lkVxXEBAQEBBGQSG7BBVAQEBAQEGlw8JOqbzVUkjC85hGzKHC+2cuB1tytpZVa6ffzW5lrW8QjFEUxR2j1lq/F3DT6PK8OL4nHKHEWc11r5XW01ANj4Hbny+Hp7wvaPWxn8s9p+rWXSrz0tDZdGOGMd/vdBfvevRS4NBbUW2r2j1lT1epx6eu9ufSGAq6x0ry9516cgOQHgvrNPp6YKdFP8vmMuptlt1WY2pnubDYfde7W3QWvv2Ww265EI5tO8bIssZaf2KjtXZtafN8SvflMoaoEhrtzoD1UVq+qzFvdmo4raEWI0IO4I3BUU90sdu8Ns4Vwumq/+3kLoZ9THMzVr7alkjDoSN7i1wNdRrRz49vND1fWZsPm5j1if3SMV4Lqqe5y9swfHFcm35mbjyuPFV1vT+JYMvbfpn5/u88L4y6llDxcxusJGfMOo/MOXmOaJdZpK6jHt6xxP89HYIJmva17SC1wDg4bEHYry+QtWazNZ5hUxjNmsM1rZudul+iG87bPaOCAgICAgjIJDdggqgICAgICAgx3EGFtqqaaB2mdpAd8rhqx4+jgD5L1S3TaJN5jidpfOVRPNG58b+69jnMcCBcOabEeoWxXQae3miO33vP8A7nWVjom35d0UvvqT5lXa1rSNqxtClbNbJbqtO8o09RfQeq5a/s9RK3E25XmEeTJ0V3S2RFe47co9Hl3v0T6ksAc0j7+K9TXeG3i3pO8IMlG5j3Me0hw0IP0uPqCCNfFVeqJ4aNZi3eHaML4fZieHQVLbMq2tMUjj7sro+7eW3xEAHN4635Zlsk4sk19FeM04b9M8NXFPLBLZwdHLG4Gx95rgbg+PLXYqfeLQ0I6b17d4l2rBMQFRTxyjQuGo6OGjh6grOvXpnZiZcfw7zVDxnhinqLuLckn+aywcf5hs7z1XN1jT6/Ng7RO8e0/zss8M0k1Nmp5O/Hq6KVu35mOHwnn66pL3rcuLPtlp2n1j9WwLigICAgICAgjIJDdggqgICAgICAgIOSe2Dg15c7EKZpOg/ERNFzoLCdo56CzvAA9StHR6np8lp+5WzYot5nHzITubrR3lXiIjh7hjLjp68lFlzVxxvK5pNHl1NtqR29Z9IZSGks3MOVzf6Ltc2+LrU9RpbV13+ltPrEf2nhOpY+813K4K95pi2GZj2QaKtsevpjtzF9p/F5qqfK7TY6j+y7os/wAXH35jl9nqtJ8LJ24nhs/EWBtmw6ir4tXMjZS1HX+H3GSHxFgD1Dm9FSm/Tmvjn33hWxTNMk0n17w3L2OOIpZ2dJcw/qYB/pVTVfaiUOtjzRPybLxJw9HVs5NlaO5J/pd1b+yhx5JpKLBntin5MZwIHxGoppAWuYQ8A+IsSPDRvqvWbadrQn1nTaK5K+rbVCoiAgICAgICAgjIJDdggqgICAgICAgICDnnFXsrpp3OlpssEpu4sIvA49co9w/TTwU0ajJtt1LGmyYKW/qY4t9XNsb4TraS5lgfkH+LH34rdS5vuj+YBRzO/L6fT6vT3iK45iPlwgQTD8NLtfM1o/q/4crNMm2KasnV6Hr8Xw5YjttMz/x4+sPMUt6d/Ud39W37n0VjHl/+W0e3b8VLWaDbxvDesdreb+9Y7/o90lTnbld7w59QodHm+HkifT1fV5sUZabescOkey2ZsjaqikAdHIztMh5j3JPsWeia2ds8zHuxPEsPTixZY5jt+sfq2T2e4W6mFXE7ds2S/UBgLXeYcD5qHPbq2lnaq8X6Zj2bcoFRZNM3tBJbvhpZfq0m9j11C7v22euqdun0Xlx5EBAQEBAQEBBGQSG7BBVAQEBAQEBAQEBAQarxHwDRVYJydjIde1hs256vZ7rvqRfxRd0+vzYZ7TvHtLkPFnBlXh4cXASQEtHbsBy790Pbuw3P013K9Radtm7p9Vg1N624tG+0ffzs1mGXK4OHL/ZC60YnZ0H2fVWTEacjZ+eM/RzDb7hqkvPVG8qvieOLaS3y2n83a2sAJIAudT4m1rnyA9FA+OekBAQEBAQEBAQEBBGQSG7BBVAQEBAQEBAQEBAQEHHva9xR2rvwULrsY7NM4bOkG0fiG7n81vlWrotPtHXaOeGbqtTMW6aTw5jLGRqodXpvh+avH0fVeC+Mf6qPhZftx+cfu2rgiU/iKI8xNE3/AMgH7FVY4b2q76a8fKX0KonxIgICAgICAgICAgIIyCQ3YIKoCAgICAgICAgICDQuP+NhC11PTOvMbtfKNouoafn/AG+q0NJpJv578fVnavWRTyU5+jk82GSiNszmFsbzZjnaF5tclgOrgObttQtWL1m3THozJraK9U+qO2C+YLt6Res1n1dw6i2DJXJTmJ3Zz2dU5dWUrOk2b9AzH/1Xz0xNYmH6lqM0W0NskcTH12fQKifICAgICAgICAgICAgjIJDdggqgICAgICAgICChKDX8XhrakGOItpYjo6VxzVDh+RrdGjzv9FZxThx+a3mn29FPNXPl8tfLHv6oeGcD0VKDLL/FLQXGSa3ZttqSGbcudz4r3k1mXJ5Y7fc84tFhwx1W7/OWj4p2+L1xELTkbZjL3DI47++/oTqbb7DktCkU0uLzc/WWde19Xl2pxH5QpxNgbIZ4aOnBe5rWhzvjklkOt+gtksOQ9V602WbUtlv/ACIR6ukVyVw05+syyvs2wPJiFUblzacyR5raGRzy248mu/UFjZL9UzPvL7zUWnF4dhwzzMR+EOoqJjCAgICAgICAgICAgjIJDdggqgICAgICAgICAgINcxrD5q09lcw0oIL3f4sxHJrfhYOp3I2tvaxZKYfNzb8o/wC1LNjvqJ6eKevvP/TKUlHBSQEMa2ONgL3HmbDVzjuTpuVDa18t+/eZT1rjwY+3aIa5guHlhnxKoae0dnkjitdwaR3QB85Fmgf3sLepzRFYw04jn5qfh2ltky/GydptPb5R7z/ZmeE8INNTBr7GV5dNM4bGR+rreA28lStO8tzWZ/jZN44jtH3QzK8qogICAgICAgICAgIIyCQ3YIKoCAgICAgICAgICAgtVEDXgBwuLg5eRtqL9Re3ouxaY7w82pFo2l7cwHcX1B8xsVx6ekBAQEBAQEBAQEBAQEEZBIbsEFUBAQEBBjJscibWR0RD+1kifO0gDJlabG5vvc9EF3GsXgpIH1FRII4mC5cbnwAAGpJOwCDXKT2jUrpI2Sw19KJXBkc1XTPigkcfdDZDpr42QSMb46p6apdSmGumlaxkhFPTulAa7YnKbjZB4b7Q6I0lTVXmApzG2aB0TmVMZe4Nbmjdbcne9tD0R3ZboPaFBLLHEKTFGmRzIw99HI2MFxsHPdybrqUcZHh/jClrJ6inhc4SwOc17Htyk5XljnM+ZocLX5XHVApeL6WTEJMPY57p2NL3kN/hC1rtz83DMLgfTcI7sn4hi8cInzB57GH8S4NAN2d7Rtzq7+GdPojiy/GyzWamqoWXAMr/AMO5jbmwLuye4tbrq4iw3JA1Qe58Xs98cUFRO5hAeYuxDWuLQ4NLpXMBNiDZt7XF7ILkOLMcIe7K0ySPhDXsLXNexjnODgeVonWIuDoQSDdBIqatrHRNN7yP7NtuuRz9fCzD9kEfCMWjqWvdHmGR8kTmvblcHMda9uh3B5ghAo8WjlnngZmLoRGXut/Du/NZrXfERkN7bHTe4AT0BAQEBAQEEZBIbsEFUBAQEBBoWOVccXEVG+WSONv4KoGaRzWtuZRYXOl0Ef2lYlA9uHVHaRTUsFbA+o7N7ZGsBBaySQNvoHH7o6ve1PG6OTCZohLDO+cMjp4o3skfJI5wyGMNvexsb/3Rxh74jHjNQKRlLLO2goxKKh8jcxbe/Zlu7i7qQPFcda/ibnVOEY3iE0kZqZXUtPLSRscz8P2E7WiN4ddxeevh5AN0wTEZzPAH4/hc7S5gNPHFStkkvp2bSHk5j4C6641zBeGZqiOsqqF7Ya+DEq9schNmvje4B8UmhuNbi4NiPG646yvD3D0dBjdHAwlzvwE75Jne/LK6cF8jzuST12Fl1xsvFV7YnbU/9PFgTYbzc+SDI4lT1VRFJA6OnjZK10T5BNJI8McLPyMyNBcQSBc2BN9bWIemUl5Z301SWOz2liIZLCJcjdXMNnscW5NA4Ag3tc3IQHYg50lP23ZgwVpp3ysuIXF9I7I5oJJbd0zGZSTZ+lygyWMPHb0LPi7Z78vPK2nkDnkfKC9gv1e0c0GJoqGbsWTUpjbMXTwv7S+QxmofleQN3Rlxc0bEOe3TNcBOwaiZBVyxMvlbTUmpN3OJmnLnvd8TnEkk8ySUGeQEBAQEBAQRkEhuwQVQEBAQEGMxXh+kqXNdUU1PO5oyh0sTHkC97AuGgQesPwGkgY9kNNTxMk99kcTGsfpbvtAsdCd0EfDeE6Cnk7WCjpYpNbPZEwOF98p+HyQZFlBEJXTCOMSuaGOlDR2jmjZpduQOiCJU8PUkhmdJTU7zMGiUuiYTKGEFvaXHesWi19rBBGp+DsOje2RlDRMe1zXte2CIOa5pu1zSBoQRugydFQRQh4ijjjD3uleGNDcz3e891t3GwuUB1BEZhOY4zMGmMTZR2gYTcsDt8t+SD1NRxvz52Mdnb2b8zQczNe47q3vO08SgvoIVVhUEj874o3Ptl7SwD8u+UuGpb4bILjaCERdiIohDYt7HI3srHcZNrG59UHmjwyGIl0cUbHEBpc1ozEDZpdvYXNhsLoJEMLWDK1oaNTYCwuTcnzJPqgoIWh5flGchrS6wzFrSS1pPQFzv1FBcQEBAQEBAQRkEhuwQVQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBGQSG7BBVAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEEZBIbsEFUBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQRkEhuwQVQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBGQUGwQVQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBHQf/Z" alt="Client 1" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-2">
                <div className="client-logo">
                  <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBESEhIPExMXFxIRFxASExAVEBYXFxUiGhYTExMYKCggGBolHhUYLTEiJSkrLi4uFx83ODMsOCk5LisBCgoKDg0OGhAQGy8lICUvLS4tLS0tLS0uLS8uLS0tLy0tLy0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAEDBQYHAgj/xAA9EAABAwIEAwUGBAQFBQAAAAABAAIDBBEFEiExBkFREyJhgZEHMkJScaEUYpKxI3KC0UNTwvDxFSSjsuH/xAAbAQEAAwEBAQEAAAAAAAAAAAAAAwQFAQIGB//EADQRAQACAQMCBAMHAwQDAAAAAAABAgMEETESIQUiQVETYbEycZGhwdHwI4HxFEKC4QYVJP/aAAwDAQACEQMRAD8A7e1osNAgrlHQIGUdAgZR0CBlHQIGUdAgZR0CBlHQIGUdAgZR0CBlHQIGUdAgZR0CBlHQIGUdAgZR0CBlHQIGUdAgZR0CBlHQIGUdAgZR0CBlHQIGUdAgZR0CBlHQIGUdAgZR0CCNlHQIJLdggqgICAgICAgICAgICAgICAgICAgICAgICAgICCMgkN2CCqAgICAgICAgICAgICAgICAgICAgICAgICAgIIyCQ3YIKoCAgICAgICAgICAgICAgICAgICAgICAgICAgjIJDdggqgICAgICAgICAgICAgICAgICAgICAgICAgICCMgkN2CCqAgICAgICAgICAgICAgICCjnAC5IA6nQJEbkRuxdRxJRsNnVVOD07RhPoFPXS5rcUn8E9dLmt3ik/gtQcWUT3ZWVEbj0aHE/su20masb2rMO20mave1Zhl4pQ4XG30I+xUExtygmNuXtccEBAQEBAQRkEhuwQVQEBAQEBAQEBAQEBAQEEPFMUhp2GSaRrG+O5PRrRq4+AUmLFfLbppG8pMWK+W3TSN5c8x32kSOu2mYI27drIA6Q+LWe63zv5LZweFVjvlnf5Q2MPhdKR1Zp/tDVi6prHZpZJHNPxyEuH9EdwPSwTUeIaXReWsd/aP1lfpFaR/SrENkwnDaOKxdTvqHdZpO55RNGW31usHUf+Q5r/ZjaPkr5a6i/+/b7o/VuFBjsTQGtgEbekeS3pYLOnxWJnzxP1Z2TQ3nv1bszS4jHJ7rtflOh/wDqs4tZhy9qz39pUsmC9OYS1ZRCAgICAgIIyCQ3YIKoCAgICAgICAgICAgINY4u4wjoxkbaSci4jv3Wg7OkI2HhufDdXdJorZ53ntX3/Zc0uktmnee0e/7OQ4vjMs8hkmeZJDt0aD8LWj3R4BfQUpjwV6aRt/PVuRbHgr0Y4/nzXsPw/Z8up5NOw+q+f8Q8VtbemHj3/ZLTFM+a/LORTN6jy1XzlqWlJNZTqedtxe9uoA/ZV7Y59UVqzs2fC8MilHdnBPy5MrvQle8eipk4v+TLz6nJj5p+bLswFo+N3oFJPhFJ/wB0qk660+kMhTQFmmcuHQjUeavafBbFG03mY+ate8W77bL6soxAQEBAQRkEhuwQVQEBAQEBAQEBAQEBBp3HXGIpAYYSHVBG+7YgficObug8z0OhotFOaeq32fqtabT9c724cbra0lziXFz3Euc5xubnck8yt7eKx01aWTURSOmv+FKJwb3jq7lfW3j9Vi63U9f9Os9vX5r+h00RHxMnM8MhHUX3JKy5p7Q0ZmPRPp6hvU+hUF8N5RWZOnqmfN9iql9Nl9kFqy2GgpnloexrnDk9lyPVuxVDJgzVnfplSyZce/TafxbPheKnRkt+gedD/V/dWNP4jNZ6M34/uy8+lj7WP8GcC2VAQEBAQEBBGQSG7BBVAQEBAQEHiaUMaXONgAST4Lza0VjeXa1m07Q06vx6SQnK4sbyDTY+ZHNYmbV5Mk+WdobWHRUpHmjeURmJSt1Ekn6iR6FQ1y5a8WlPOnxzzWGTouJ3t0lAePmFg702P2VzFr7x2vG6pl8OrPek7Nko62OVuaNwcOY5j6jktPHlrkjesszJivjna0Nc474tbRRhjLOqHjuN3DB/mPHToOZ8AVo6PSTmtvP2Y/mzuLH1T34cRraxxLnOcXPcS4udqSTu4lfQdqRtC7fNFK7QiU7bm5/5KztZqOivTHMpvDtP8a/XbiPzlLCxn0a/FIOq68zCdA4HYhIeZTYguvEsthOISwPzxOLTzHwu8HN5ptugzYKZa7Xh0jA8bjqm2IAkA70Z1H8zeo/ZRXxxPaY3fO6nS309vl7suxgAsBYdF5rWKxtHCrM78vS9OCAgICAgjIJDdggqgICAgICDW+MsQa2MRBwuSHOF9mja/TW3oqOtv5eiPVpeHYZtfrmO0fVpLsRYPi+xWd8GW10y9x1bXbOB8Ofok45jk6XsyrnSbI1XjppQJGuIfs0A7nx/L1Wh4do8mfLtTtEcyq6u+OuPa8b+0NGxLEXzSPmmcXPccznH7ADkBsAvuqVrjr014hixeKww0s17uP8AvwXibb90EWnJb7ymrnbWaR05rPzaeuS3VM92/p9RbDSKREbQnR1IO4I+6qW0to47r9NbSftRsvg3Ve1LV5haretvsyvxtXl6ZnB6/snd+Nk0Z96N+ht1Y8asP006hd3QZ8M5I8szE+/7x6uh0fDdJVRCWllkYDpldZ2U82uB1B806tmJfXZ8F+jLESsP4cqoHB8dn5TcOjPeH9J18tV2LRKaNdgzV6b9t/dtuDYkJmajLI3R7DcEHrY62K8TGzI1GD4Vu3eJ4lkVxXEBAQEBBGQSG7BBVAQEBAQEGlw8JOqbzVUkjC85hGzKHC+2cuB1tytpZVa6ffzW5lrW8QjFEUxR2j1lq/F3DT6PK8OL4nHKHEWc11r5XW01ANj4Hbny+Hp7wvaPWxn8s9p+rWXSrz0tDZdGOGMd/vdBfvevRS4NBbUW2r2j1lT1epx6eu9ufSGAq6x0ry9516cgOQHgvrNPp6YKdFP8vmMuptlt1WY2pnubDYfde7W3QWvv2Ww265EI5tO8bIssZaf2KjtXZtafN8SvflMoaoEhrtzoD1UVq+qzFvdmo4raEWI0IO4I3BUU90sdu8Ns4Vwumq/+3kLoZ9THMzVr7alkjDoSN7i1wNdRrRz49vND1fWZsPm5j1if3SMV4Lqqe5y9swfHFcm35mbjyuPFV1vT+JYMvbfpn5/u88L4y6llDxcxusJGfMOo/MOXmOaJdZpK6jHt6xxP89HYIJmva17SC1wDg4bEHYry+QtWazNZ5hUxjNmsM1rZudul+iG87bPaOCAgICAgjIJDdggqgICAgICAgx3EGFtqqaaB2mdpAd8rhqx4+jgD5L1S3TaJN5jidpfOVRPNG58b+69jnMcCBcOabEeoWxXQae3miO33vP8A7nWVjom35d0UvvqT5lXa1rSNqxtClbNbJbqtO8o09RfQeq5a/s9RK3E25XmEeTJ0V3S2RFe47co9Hl3v0T6ksAc0j7+K9TXeG3i3pO8IMlG5j3Me0hw0IP0uPqCCNfFVeqJ4aNZi3eHaML4fZieHQVLbMq2tMUjj7sro+7eW3xEAHN4635Zlsk4sk19FeM04b9M8NXFPLBLZwdHLG4Gx95rgbg+PLXYqfeLQ0I6b17d4l2rBMQFRTxyjQuGo6OGjh6grOvXpnZiZcfw7zVDxnhinqLuLckn+aywcf5hs7z1XN1jT6/Ng7RO8e0/zss8M0k1Nmp5O/Hq6KVu35mOHwnn66pL3rcuLPtlp2n1j9WwLigICAgICAgjIJDdggqgICAgICAgIOSe2Dg15c7EKZpOg/ERNFzoLCdo56CzvAA9StHR6np8lp+5WzYot5nHzITubrR3lXiIjh7hjLjp68lFlzVxxvK5pNHl1NtqR29Z9IZSGks3MOVzf6Ltc2+LrU9RpbV13+ltPrEf2nhOpY+813K4K95pi2GZj2QaKtsevpjtzF9p/F5qqfK7TY6j+y7os/wAXH35jl9nqtJ8LJ24nhs/EWBtmw6ir4tXMjZS1HX+H3GSHxFgD1Dm9FSm/Tmvjn33hWxTNMk0n17w3L2OOIpZ2dJcw/qYB/pVTVfaiUOtjzRPybLxJw9HVs5NlaO5J/pd1b+yhx5JpKLBntin5MZwIHxGoppAWuYQ8A+IsSPDRvqvWbadrQn1nTaK5K+rbVCoiAgICAgICAgjIJDdggqgICAgICAgICDnnFXsrpp3OlpssEpu4sIvA49co9w/TTwU0ajJtt1LGmyYKW/qY4t9XNsb4TraS5lgfkH+LH34rdS5vuj+YBRzO/L6fT6vT3iK45iPlwgQTD8NLtfM1o/q/4crNMm2KasnV6Hr8Xw5YjttMz/x4+sPMUt6d/Ud39W37n0VjHl/+W0e3b8VLWaDbxvDesdreb+9Y7/o90lTnbld7w59QodHm+HkifT1fV5sUZabescOkey2ZsjaqikAdHIztMh5j3JPsWeia2ds8zHuxPEsPTixZY5jt+sfq2T2e4W6mFXE7ds2S/UBgLXeYcD5qHPbq2lnaq8X6Zj2bcoFRZNM3tBJbvhpZfq0m9j11C7v22euqdun0Xlx5EBAQEBAQEBBGQSG7BBVAQEBAQEBAQEBAQarxHwDRVYJydjIde1hs256vZ7rvqRfxRd0+vzYZ7TvHtLkPFnBlXh4cXASQEtHbsBy790Pbuw3P013K9Radtm7p9Vg1N624tG+0ffzs1mGXK4OHL/ZC60YnZ0H2fVWTEacjZ+eM/RzDb7hqkvPVG8qvieOLaS3y2n83a2sAJIAudT4m1rnyA9FA+OekBAQEBAQEBAQEBBGQSG7BBVAQEBAQEBAQEBAQEHHva9xR2rvwULrsY7NM4bOkG0fiG7n81vlWrotPtHXaOeGbqtTMW6aTw5jLGRqodXpvh+avH0fVeC+Mf6qPhZftx+cfu2rgiU/iKI8xNE3/AMgH7FVY4b2q76a8fKX0KonxIgICAgICAgICAgIIyCQ3YIKoCAgICAgICAgICDQuP+NhC11PTOvMbtfKNouoafn/AG+q0NJpJv578fVnavWRTyU5+jk82GSiNszmFsbzZjnaF5tclgOrgObttQtWL1m3THozJraK9U+qO2C+YLt6Res1n1dw6i2DJXJTmJ3Zz2dU5dWUrOk2b9AzH/1Xz0xNYmH6lqM0W0NskcTH12fQKifICAgICAgICAgICAgjIJDdggqgICAgICAgICChKDX8XhrakGOItpYjo6VxzVDh+RrdGjzv9FZxThx+a3mn29FPNXPl8tfLHv6oeGcD0VKDLL/FLQXGSa3ZttqSGbcudz4r3k1mXJ5Y7fc84tFhwx1W7/OWj4p2+L1xELTkbZjL3DI47++/oTqbb7DktCkU0uLzc/WWde19Xl2pxH5QpxNgbIZ4aOnBe5rWhzvjklkOt+gtksOQ9V602WbUtlv/ACIR6ukVyVw05+syyvs2wPJiFUblzacyR5raGRzy248mu/UFjZL9UzPvL7zUWnF4dhwzzMR+EOoqJjCAgICAgICAgICAgjIJDdggqgICAgICAgICAgINcxrD5q09lcw0oIL3f4sxHJrfhYOp3I2tvaxZKYfNzb8o/wC1LNjvqJ6eKevvP/TKUlHBSQEMa2ONgL3HmbDVzjuTpuVDa18t+/eZT1rjwY+3aIa5guHlhnxKoae0dnkjitdwaR3QB85Fmgf3sLepzRFYw04jn5qfh2ltky/GydptPb5R7z/ZmeE8INNTBr7GV5dNM4bGR+rreA28lStO8tzWZ/jZN44jtH3QzK8qogICAgICAgICAgIIyCQ3YIKoCAgICAgICAgICAgtVEDXgBwuLg5eRtqL9Re3ouxaY7w82pFo2l7cwHcX1B8xsVx6ekBAQEBAQEBAQEBAQEEZBIbsEFUBAQEBBjJscibWR0RD+1kifO0gDJlabG5vvc9EF3GsXgpIH1FRII4mC5cbnwAAGpJOwCDXKT2jUrpI2Sw19KJXBkc1XTPigkcfdDZDpr42QSMb46p6apdSmGumlaxkhFPTulAa7YnKbjZB4b7Q6I0lTVXmApzG2aB0TmVMZe4Nbmjdbcne9tD0R3ZboPaFBLLHEKTFGmRzIw99HI2MFxsHPdybrqUcZHh/jClrJ6inhc4SwOc17Htyk5XljnM+ZocLX5XHVApeL6WTEJMPY57p2NL3kN/hC1rtz83DMLgfTcI7sn4hi8cInzB57GH8S4NAN2d7Rtzq7+GdPojiy/GyzWamqoWXAMr/AMO5jbmwLuye4tbrq4iw3JA1Qe58Xs98cUFRO5hAeYuxDWuLQ4NLpXMBNiDZt7XF7ILkOLMcIe7K0ySPhDXsLXNexjnODgeVonWIuDoQSDdBIqatrHRNN7yP7NtuuRz9fCzD9kEfCMWjqWvdHmGR8kTmvblcHMda9uh3B5ghAo8WjlnngZmLoRGXut/Du/NZrXfERkN7bHTe4AT0BAQEBAQEEZBIbsEFUBAQEBBoWOVccXEVG+WSONv4KoGaRzWtuZRYXOl0Ef2lYlA9uHVHaRTUsFbA+o7N7ZGsBBaySQNvoHH7o6ve1PG6OTCZohLDO+cMjp4o3skfJI5wyGMNvexsb/3Rxh74jHjNQKRlLLO2goxKKh8jcxbe/Zlu7i7qQPFcda/ibnVOEY3iE0kZqZXUtPLSRscz8P2E7WiN4ddxeevh5AN0wTEZzPAH4/hc7S5gNPHFStkkvp2bSHk5j4C6641zBeGZqiOsqqF7Ya+DEq9schNmvje4B8UmhuNbi4NiPG646yvD3D0dBjdHAwlzvwE75Jne/LK6cF8jzuST12Fl1xsvFV7YnbU/9PFgTYbzc+SDI4lT1VRFJA6OnjZK10T5BNJI8McLPyMyNBcQSBc2BN9bWIemUl5Z301SWOz2liIZLCJcjdXMNnscW5NA4Ag3tc3IQHYg50lP23ZgwVpp3ysuIXF9I7I5oJJbd0zGZSTZ+lygyWMPHb0LPi7Z78vPK2nkDnkfKC9gv1e0c0GJoqGbsWTUpjbMXTwv7S+QxmofleQN3Rlxc0bEOe3TNcBOwaiZBVyxMvlbTUmpN3OJmnLnvd8TnEkk8ySUGeQEBAQEBAQRkEhuwQVQEBAQEGMxXh+kqXNdUU1PO5oyh0sTHkC97AuGgQesPwGkgY9kNNTxMk99kcTGsfpbvtAsdCd0EfDeE6Cnk7WCjpYpNbPZEwOF98p+HyQZFlBEJXTCOMSuaGOlDR2jmjZpduQOiCJU8PUkhmdJTU7zMGiUuiYTKGEFvaXHesWi19rBBGp+DsOje2RlDRMe1zXte2CIOa5pu1zSBoQRugydFQRQh4ijjjD3uleGNDcz3e891t3GwuUB1BEZhOY4zMGmMTZR2gYTcsDt8t+SD1NRxvz52Mdnb2b8zQczNe47q3vO08SgvoIVVhUEj874o3Ptl7SwD8u+UuGpb4bILjaCERdiIohDYt7HI3srHcZNrG59UHmjwyGIl0cUbHEBpc1ozEDZpdvYXNhsLoJEMLWDK1oaNTYCwuTcnzJPqgoIWh5flGchrS6wzFrSS1pPQFzv1FBcQEBAQEBAQRkEhuwQVQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBGQSG7BBVAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEEZBIbsEFUBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQRkEhuwQVQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBGQUGwQVQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBHQf/Z" alt="Client 2" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-2">
                <div className="client-logo">
                  <img src="data:image/jpeg;base64,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" alt="Client 3" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-2">
                <div className="client-logo">
                  <img src="data:image/jpeg;base64,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" alt="Client 4" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-2">
                <div className="client-logo">
                  <img src="data:image/jpeg;base64,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" alt="Client 5" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section news-section">
          <h1 className='text-center'>News Feed</h1>
          <div className="container">
            <div className="row">
              {/* Left Side Image */}
              <div className="col-md-6">
                <img src={img1} alt="News Image" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
              </div>

              {/* Right Side Carousel for News */}
              <div className='col-md-6'>
                <h5>

                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                  Read More

                </h5>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Index;
