import React from 'react';
import bg1 from '../assets/images/bg_1.jpg'; // Replace with your image path

const TermsAndConditions = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="block-31" style={{ position: "relative" }}>
        <div className=" loop-block-31 ">
          <div className="block-30 block-30-sm item"
            style={{
              backgroundImage: `url(${bg1})`,
              backgroundSize: 'cover',  // Ensure the image covers the area
              backgroundPosition: 'center', // Center the image
              height: '50vh' // Set the height to 50%
            }}
            data-stellar-background-ratio="0.5">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="heading">Terms and Conditions</h2>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-semibold">Terms and Conditions</h1>
        <p className="text-lg md:text-2xl mt-2">Your privacy is important to us</p>
      </div>
      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-6">
          Welcome to our website. By accessing or using our services, you agree to comply with the following terms and conditions. Please read these terms carefully.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Use of the Website</h2>
        <p className="mb-6">
          You agree to use this website in accordance with all applicable laws and regulations. You may not use this site for any unlawful purpose or in any manner that could damage, disable, or impair the functionality of the site.
        </p>

        <h2 className="text-2xl font-semibold mb-4">User Content</h2>
        <p className="mb-6">
          By submitting content on this website, you grant us a non-exclusive, worldwide, royalty-free license to use, copy, modify, display, and distribute such content. You are responsible for ensuring that any content you submit does not infringe on the rights of others.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
        <p className="mb-6">
          To the fullest extent permitted by law, we shall not be held liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or services.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
        <p className="mb-6">
          Your privacy is important to us. Please refer to our Privacy Policy for detailed information on how we collect, use, and protect your personal information.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
        <p className="mb-6">
          We reserve the right to modify these terms at any time. Any changes will be posted on this page, and the date of the last revision will be updated accordingly. Your continued use of the site after any changes indicates your acceptance of the new terms.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
        <p className="mb-6">
          These terms shall be governed by and construed in accordance with the laws of the jurisdiction where we operate, without regard to its conflict of law principles.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-6">
          If you have any questions or concerns regarding these Terms and Conditions, please feel free to contact us at <a href="mailto:info@example.com" className="text-blue-500">info@example.com</a>.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
