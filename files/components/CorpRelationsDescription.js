import React from 'react';

const CorpRelationsDescription = () => {
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
                                    We are Project Break The Cycle, a 501(c)3 nonprofit organization aspiring 
                                    to sustainably break the cycle of injustice by empowering proven, transparent, 
                                    and relevant nonprofit organizations through creative fundraising mechanisms. 
                                    In other words, we’re a nonprofit for nonprofits, helping them fundraise in 
                                    ways they haven’t done before by tapping into unexplored revenue streams. We’ve 
                                    established a community wanting to support transparent nonprofits while in 
                                    return receiving amazing products to display their support. 
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

export default CorpRelationsDescription;
