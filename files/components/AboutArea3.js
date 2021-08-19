import React from 'react';

const AboutArea3 = () => {
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
                                <h2 className="section__title">Our Founding Story</h2>
                                <p className="section__meta">how did we start?</p>
                                <p className="section__desc">
                                    The idea of Project Break The Cycle started when a tight-knit group of friends 
                                    consistently noticed a lack of transparency in fundraising initiatives from 
                                    large nonprofit organizations.  What started out as a way to combine our hobbies 
                                    in fashion design and business management eventually led to Project Break The Cycle - 
                                    a 501(c)3 nonprofit organization that leverages creative fundraising mechanisms to 
                                    empower other reputable and transparent NPOs. During our premiere Cherry Blossom 
                                    sweatshirt sale, we developed a network of supporters that empathized with our cause 
                                    and promoted the PBTC mission. And we haven’t looked back since.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about-semi-img">
                            <img src="/images/childrenthumbsup.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutArea3;
