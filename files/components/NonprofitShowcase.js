import React from 'react';

const NonprofitShowcase = () => {
    return (
        <section className="team-area text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="section-heading">
                            <div className="section-icon">
                                <img src="/images/section-icon.png" alt="section-icon" />
                            </div>
                            <h2 className="section__title">Our Nonprofit Partners</h2>
                            <p className="section__meta">Not the ordinary bunch</p>
                        </div>
                    </div>
                </div>
                <div className="row team-content-wrap">
                    <div className="col-lg-4 col-sm-6">
                        <div className="team-item team-item1">
                            <div className="team__img">
                                <img src="/images/htswoutside.jpg" alt="team image" />    
                            </div>
                            <div className="team__title">
                                <h3 className="team__title-title"><a href="/orphan-scholarship-fund">Home of Tripoli for<br/> Social Welfare</a></h3>
                                <span className="team__title-meta">Orphanage in Tripoli, Lebanon</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="team-item team-item2">
                            <div className="team__img">
                                <img src="/images/yrrf1.jpg" alt="team image" />
                                    <div className="team__img-links">
                                        <ul>
                                            <li><a href="https://www.facebook.com/savealifeinyemen/"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="https://www.instagram.com/yemenfoundation/"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="https://yemenfoundation.org/"><i className="fa fa-link"></i></a></li>
                                        </ul>
                                    </div>
                            </div>
                            <div className="team__title">
                                <h3 className="team__title-title"><a href="/farming-income-generation">Yemen Relief and <br/> Reconstruction<br/> Foundation</a></h3>
                                <span className="team__title-meta">Yemen Aid</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="team-item team-item3">
                            <div className="team__img">
                                <img src="/images/logo_white_padding_270x295.png" alt="team image" />
                            </div>
                            <div className="team__title">
                                <h3 className="team__title-title"><a href="#">More Coming Soon...</a></h3>
                                <span className="team__title-meta">Worldwide</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default NonprofitShowcase;
