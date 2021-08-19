import React from 'react';

const AboutArea = () => {
    return (
        <section className="about-area">
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-7">
                        <div className="about-heading">
                            <div className="section-heading">
                                <div className="section-icon">
                                    <img src="/images/section-icon.png" alt="section-icon" />
                                </div>
                                <h2 className="section__title">Who We Are</h2>
                                <p className="section__meta">why does project break the cycle exist?</p>
                                <p className="section__desc">
                                    We are a 501(c)3 fundraising nonprofit organization that utilizes 
                                    100% of profits from selling uniquely designed clothing to empower 
                                    nonprofit organizations aimed at sustainably breaking the cycle of 
                                    poverty in the Middle East. In other words, we’re a nonprofit for 
                                    nonprofits. We help them fundraise in novel ways by tapping into 
                                    unexplored revenue streams, such as merchandise sales and corporate 
                                    matching programs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about-semi-img">
                            <img src="/images/logo_white_padding_400x349.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutArea;
