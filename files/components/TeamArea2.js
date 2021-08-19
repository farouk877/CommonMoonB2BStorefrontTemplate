import React from 'react';

const TeamArea2 = () => {
    return (
        <section className="team-area text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="section-heading">
                            <div className="section-icon">
                                <img src="/images/section-icon.png" alt="section-icon" />
                            </div>
                            <h2 className="section__title">Executive Team</h2>
                            <p className="section__meta">100% Volunteers means 100% of contributions directly to campaigns</p>
                        </div>
                    </div>
                </div>
                <div className="row team-content-wrap">
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-item team-item1">
                            <div className="team__img">
                                <img src="/images/team.jpg" alt="team image" />
                                    <div className="team__img-links">
                                        <ul>
                                            <li><a href="mailto:farouk@projectbreakthecycle.com"><i className="fa  fa-envelope-o"></i></a></li>
                                        </ul>
                                    </div>
                            </div>
                            <div className="team__title">
                                <h3 className="team__title-title"><a href="#">Farouk Marhaba</a></h3>
                                <span className="team__title-meta">founder &amp; president</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-item team-item2">
                            <div className="team__img">
                                <img src="/images/team2.jpg" alt="team image" />
                                    <div className="team__img-links">
                                        <ul>
                                            <li><a href="mailto:farouk@projectbreakthecycle.com"><i className="fa  fa-envelope-o"></i></a></li>
                                        </ul>
                                    </div>
                            </div>
                            <div className="team__title">
                                <h3 className="team__title-title"><a href="#">yoni albert</a></h3>
                                <span className="team__title-meta">volunteer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-item team-item3">
                            <div className="team__img">
                                <img src="/images/team3.jpg" alt="team image" />
                                    <div className="team__img-links">
                                        <ul>
                                            <li><a href="mailto:farouk@projectbreakthecycle.com"><i className="fa  fa-envelope-o"></i></a></li>
                                        </ul>
                                    </div>
                            </div>
                            <div className="team__title">
                                <h3 className="team__title-title"><a href="#">christine eve</a></h3>
                                <span className="team__title-meta">co founder</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-item team-item4">
                            <div className="team__img">
                                <img src="/images/team4.jpg" alt="team image" />
                                    <div className="team__img-links">
                                        <ul>
                                            <li><a href="mailto:farouk@projectbreakthecycle.com"><i className="fa  fa-envelope-o"></i></a></li>
                                        </ul>
                                    </div>
                            </div>
                            <div className="team__title">
                                <h3 className="team__title-title"><a href="#">david hardson</a></h3>
                                <span className="team__title-meta">student</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamArea2;
