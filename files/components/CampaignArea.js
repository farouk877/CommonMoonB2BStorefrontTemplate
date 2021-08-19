import React from 'react';

const CampaignArea = () => {
    return (
        <div>
            <section className="causes-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="section-heading blog-heading text-center">
                                <div className="section-icon">
                                    <img src="/images/section-icon.png" alt="section-icon" />
                                </div>
                                <h2 className="section__title">Latest Campaigns</h2>
                                <p className="section__meta">What We've Been Up To</p>
                            </div>
                        </div>
                    </div>

                       


                    <div className="row blog-content-wrap">
                        <div className="col-lg-4">
                            <div className="blog-content">
                                <div className="blog-item blog-item1">
                                    <div className="blog-img">
                                        <img src="/images/lebfundraiser.jpg" alt="" />
                                        <span className="blog__tag" style={{ color: '#33FF3B' }}><i className="fa fa-flash"></i> Active</span>
                                    </div>
                                    <div id="bar2" className="barfiller">
                                        <div className="tipWrap">
                                            <span className="tip"></span>
                                        </div>
                                        <span className="fill" data-percentage="80"></span>
                                    </div>
                                    <div className="blog-inner-content">
                                        <h3 className="blog__title"><a href="/lebanon-relief-fund">Lebanon Relief Fund</a></h3>
                                        <p className="blog__desc">
                                        Fundraising for our local team members in Tripoli, Lebanon to purchase and distribute food, medicine, and diapers to individuals and families in need across the Greater Beirut Area, after the devastating explosion on August 4, 2020.
                                        </p>
                                        <ul className="blog__list">
                                            <li><i className="icon-target"></i> Goal: <span>$10,000</span></li>
                                            {/* <li><i className="fa fa-line-chart"></i> Raised: <span>$320</span></li> */}
                                        </ul>
                                        <a href="https://www.gofundme.com/f/local-emergency-relief-fund-for-lebanon" className="theme-btn blog-item1">learn more</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-content">
                                <div className="blog-item blog-item2">
                                    <div className="blog-img">
                                        <img src="/images/igpost6.png" alt="" />
                                        <span className="blog__tag" style={{ color: '#33FF3B' }}><i className="fa fa-flash"></i> Active</span>
                                    </div>
                                    <div id="bar2" className="barfiller">
                                        <div className="tipWrap">
                                            <span className="tip"></span>
                                        </div>
                                        <span className="fill" data-percentage="80"></span>
                                    </div>
                                    <div className="blog-inner-content">
                                        <h3 className="blog__title"><a href="/farming-income-generation">Income Generation Farming Project</a></h3>
                                        <p className="blog__desc">
                                            Working with the Yemen Relief and Reconstruction Foundation to fund the distribution of farm animals. 
                                            Families can eat animal produce and sell surplus back into local markets.
                                        </p>
                                        <ul className="blog__list">
                                            <li><i className="icon-target"></i> Goal: <span>$17,500</span></li>
                                            <li><i className="fa fa-line-chart"></i> Raised: <span>$4,501</span></li>
                                        </ul>
                                        <a href="/farming-income-generation" className="theme-btn blog-item1">learn more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-content">
                                <div className="blog-item blog-item1">
                                    <div className="blog-img">
                                        <img src="/images/PBTC-18.png" alt="" />
                                        <span className="blog__tag" style={{ color: 'orange' }}><i className="fa fa-lock"></i> Previous</span>
                                    </div>
                                    <div id="bar1" className="barfiller">
                                        <div className="tipWrap">
                                            <span className="tip"></span>
                                        </div>
                                        <span className="fill" data-percentage="23"></span>
                                    </div>
                                    <div className="blog-inner-content">
                                        <h3 className="blog__title"><a href="/orphan-scholarship-fund">Orphan Children Scholarship Fund</a>
                                        </h3>
                                        <p className="blog__desc">
                                            Working with the Home of Tripoli for Social Welfare to support a scholarship pool 
                                            funding private-school tuitions and after-school tutors for orphan children in 
                                            Tripoli, Lebanon.
                                        </p>
                                        <ul className="blog__list">
                                            <li><i className="icon-target"></i> Goal: <span>$10,000</span></li>
                                            <li><i className="fa fa-line-chart"></i> Raised: <span>$16,650</span></li>
                                        </ul>
                                        <a href="/orphan-scholarship-fund" className="theme-btn">learn more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row blog-content-wrap">
                        <div className="col-lg-4">
                            <div className="blog-content">
                                <div className="blog-item blog-item1">
                                    <div className="blog-inner-content">
                                        <a href="/campaigns" className="theme-btn">All Campaigns</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CampaignArea;
