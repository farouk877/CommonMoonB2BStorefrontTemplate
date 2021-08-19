import React from 'react';
import Link from 'next/link';

const OrphanScholarFund = () => {
    return (
        <section className="causes-detail-area">
            <div className="container">
                <div className="row blog-content-wrap">
                    <div className="col-lg-8">
                        <div className="blog-content">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <span className="blog__tag" style={{ color: 'orange' }}><i className="fa fa-lock"></i> Previous</span>

                                    <img src="/images/playingcards770x453.jpg" alt="" />
                                </div>
                                <div className="blog-inner-content">
                                    <div className="inner-causes-box">
                                        <h3 className="blog__title">Orphan Children Scholarship Fund</h3>
                                        <ul className="blog__list">
                                            <li><i className="icon-target"></i> Goal: <span>$10,000</span></li>
                                            <li><i className="fa fa-line-chart"></i> Raised: <span>$16,650</span></li>
                                        </ul>
                                    </div>
                                    <div className="inner-causes-btn">
                                        <Link href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SKD88K8R387KQ&source=url"><a className="theme-btn">donate now</a></Link>
                                    </div>
                                    
                                </div>
                                <div className="blog-inner-content-2">
                                    <p className="causes__text" style={{"color":"orange"}}>
                                    PREVIOUS CAMPAIGN
                                    </p>
                                    <p className="causes__text">
                                        We realize that education is the driving force for individuals to sustainably break free from intergenerational poverty. A better education provides better job opportunities that pay higher salaries, thus allowing individuals to better support their families and escape the cycle of poverty. In Lebanon, political conflicts have devastated public school systems, rendering private school as the only means of obtaining a thorough education. Currently, the Home of Tripoli for Social Welfare (HTSW), an orphanage in Tripoli, Lebanon, only has the funding to send 7 of its 55 children to private school. Project Break The Cycle aims to raise that number and provide more children with the opportunity to seek better education. 
                                    </p>
                                    <p className="causes__text causes__text2">
                                        To reach our goal, we’ve partnered with HTSW to organize a scholarship pool where funds will be allocated for private school tuition, private after-school tutors, books, and other school supplies. Our goal is to provide a $10,000 education fund for HTSW. The allocation details can be found below. 
                                    </p>
                                    {/* <div className="inner-causes-img-box row">
                                        <div className="col-lg-6">
                                            <div className="inner-causes-img-item inner-causes-img-item1">
                                                <img src="/images/img13.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="inner-causes-img-item inner-causes-img-item2">
                                                <img src="/images/img14.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div> */}
                                    <p className="causes__text">
                                        <ul>
                                            <li> Goal: $10,000</li>
                                            <li> Tuition scholarship for one school-year: $7,466</li>
                                            <li> 2x after school private teacher (per child) for one school year: $667</li>
                                            <li> 2x school supplies (books, stationary, bags, etc.): $767</li>
                                            <li> 2x transportation fees for one school-year: $933</li>
                                            <li> 2x miscellaneous items (snacks, uniforms, etc.): $167</li>
                                        </ul>
                                        <br/>
                                    </p>
                                    <p className="causes__text">
                                        [UPDATE]
                                        July 6, 2020: We have raised $16,650, surpassing our fundraising goal of $10,000! All extra funding ($6,650) has been directed towards full-tuition scholarships for orphans at HTSW. Our fundraising for this partnership has now concluded. Thank you to all our supporters! Below is the updated allocation information:
                                    </p>    
                                    <p className="causes__text">
                                        <ul>
                                            <li> Total Raised: $16,650/$10,000</li>
                                            <li> Tuition scholarships for one school year: $14,116/$7,466</li>
                                            <li> 2x after school private teacher (per child) for one school year: $667/$667</li>
                                            <li> 2x school supplies (books, stationary, bags, etc.): $767/$767</li>
                                            <li> 2x transportation fees for one school-year: $933/$933</li>
                                            <li> 2x miscellaneous items (snacks, uniforms, etc.): $167/$167</li>
                                        </ul>
                                    </p>
                                        
                                        

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sidebar-shared">
                            <div className="side-widget">
                                <h2 className="widget__title">Share Cause</h2>
                                <div className="side-share-profile">
                                    <ul>
                                        {/* <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li> */}
                                        <li><a href="/orphan-scholarship-fund"><i className="fa fa-link"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrphanScholarFund;
