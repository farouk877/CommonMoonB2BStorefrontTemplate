import React from 'react';

const NonprofitPartnersArea = () => {
    return (
        <section className="about-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="about-semi-img">
                            <img src="/images/htswoutside.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about-heading">
                            <div className="section-heading">
                                <div className="section-icon">
                                    <img src="/images/section-icon.png" alt="section-icon" />
                                </div>
                                <h2 className="section__title">Our Partnerships are Everything</h2>
                                <p className="section__meta">We empower our partners</p>
                                <p className="section__desc">
                                    Since Project Break The Cycle acts as a fundraising nonprofit organization, 
                                    we need partner nonprofits to fulfill our campaign goals. Through our rigorous 
                                    vetting process, we ensure our partners are reputable and transparent before 
                                    moving forward. Every two quarters, after campaigns are completed, we partner 
                                    with other nonprofits that align with our mission and repeat the same process. 
                                    With your support, our fundraising, and our partners’ efforts, we are making 
                                    progress in ending the cycle of poverty in the Middle East.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NonprofitPartnersArea;
