import React from 'react';

const BlogHome = () => {
    return (
        <section className="blog-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <div className="section-heading blog-heading">
                            <div className="section-icon">
                                <img src="/images/section-icon.png" alt="section-icon" />
                            </div>
                            <h2 className="section__title">Recent News</h2>
                            <p className="section__meta">updates about what's going on with us, our campaigns, and our partners</p>
                        </div>
                    </div>
                </div>
                <div className="row recent-post-wrap">
                    <div className="col-lg-6">
                        <div className="recent-item">
                            <div className="recent__img">
                                <span className="meta__date-date">02 nov, 2020</span>
                                <img src="/images/novUpdateLarge.jpg" alt="service-image" />
                            </div>
                            <div className="news__content">
                                <h3 className="news__content-title"><a href="/summary-nov-2020">Summary of Events: Jul. 6, 2020- Oct. 31, 2020</a></h3>
                                <ul className="news__content-list">
                                    <li>PBTC</li>
                                </ul>
                                <p className="news__content-text">
                                    The Project Break The Cycle team is eager to share some exciting news about what has been going on for the past several months.
                                </p>
                                <a href="/summary-nov-2020" className="theme-btn">read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="third-recent-box">
                            <ul className="third-recent-item">


                                <li>
                                    <div className="recent__img">
                                        <a href="/our-official-relaunch"><img src="/images/logo_white_padding_270x295.png" alt="" /></a>
                                    </div>
                                    <div className="recent__content">
                                        <span>06 jul, 2020</span>
                                        <h4><a href="/our-official-relaunch">Our Official Relaunch</a>
                                        </h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="recent__img">
                                        <a href="/summary-june-2020"><img src="/images/htswkidspainting170x137.jpg" alt="" /></a>
                                    </div>
                                    <div className="recent__content">
                                        <span>01 jun, 2020</span>
                                        <h4><a href="/summary-june-2020">Summary of Events: Jun 1, 2017 - Jun 1, 2020</a>
                                        </h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="recent__img">
                                        <a href="/stuffed-with-love-event"><img src="/images/stuffedwithlove170x137.jpg" alt="" /></a>
                                    </div>
                                    <div className="recent__content">
                                        <span>12 may, 2017</span>
                                        <h4><a href="/stuffed-with-love-event">Stuffed With Love Event</a></h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="recent__img">
                                        <a href="/summary-march-2017"><img src="/images/htswstudying170x137.jpg" alt="" /></a>
                                    </div>
                                    <div className="recent__content">
                                        <span>29 mar, 2017</span>
                                        <h4><a href="/summary-march-2017">Summary of Events: Dec. 26, 2016 - Mar. 29, 2017</a></h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogHome;
