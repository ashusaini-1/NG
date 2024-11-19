import React from 'react';
import bg1 from "../assets/images/bg_3.jpg"

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy">
            {/* Banner Section */}
            <div className="block-31" style={{ position: "relative" }}>
                <div className="loop-block-31 ">
                    <div className="block-30 block-30-sm item"
                     style={{ backgroundImage: `url(${bg1})` }}
                        data-stellar-background-ratio="0.5">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-7 text-center">
                                    <h2 className="heading">Privacy Policy</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-8 sm:px-6 md:px-12 lg:px-16">
                <div className="space-y-8 text-lg md:text-xl">
                    <section>
                        <h2 className="text-2xl font-semibold">Introduction</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Etiam aliquet, velit eu sodales tincidunt, velit nunc facilisis elit, a fermentum lorem lorem vitae ligula. Sed non volutpat augue. Nulla varius libero ut velit ultricies, non dictum elit bibendum. Aliquam erat volutpat. Integer sit amet libero urna.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">Data Collection</h2>
                        <p>
                            We collect personal data in a variety of ways, including when you register on our website, make donations, or subscribe to our newsletter. The types of personal information we collect include your name, email address, contact details, and payment information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
                        <p>
                            Your personal information is used to process transactions, provide customer support, improve our services, and send you important updates. We do not share your data with third parties without your consent, except when required by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">Cookies and Tracking</h2>
                        <p>
                            We use cookies and similar technologies to enhance your experience on our website. Cookies help us analyze website traffic, customize content, and improve functionality. You may disable cookies through your browser settings, but this may affect the functionality of the site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">Your Rights</h2>
                        <p>
                            You have the right to access, correct, or delete your personal data. If you wish to exercise any of these rights, please contact us at <a href="mailto:info@yourdomain.com" className="text-blue-500">info@yourdomain.com</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">Changes to Our Privacy Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the revised policy will become effective immediately. Please check this page periodically to stay informed about our data practices.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">Contact Us</h2>
                        <p>
                            If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:info@yourdomain.com" className="text-blue-500">info@yourdomain.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
