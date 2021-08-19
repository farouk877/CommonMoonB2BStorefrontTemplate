import React from 'react';
import Link from 'next/link';

const FarmingIncomeGen = () => {
    return (
        <section className="causes-detail-area">
            <div className="container">
                <div className="row blog-content-wrap">
                    <div className="col-lg-12">
                        <div className="blog-content">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <span className="blog__tag" style={{ color: '#008000' }}><i className="fa fa-flash"></i> Active</span>

                                    <img src="/images/animals700x400.jpg" alt="" />
                                </div>
                                <div className="blog-inner-content">
                                    <div className="inner-causes-box">
                                        <h3 className="blog__title">Income Generation Farming Project</h3>
                                        <ul className="blog__list">
                                            <li><i className="icon-target"></i> Goal: <span>$17,500</span></li>
                                            <li><i className="fa fa-line-chart"></i> Raised: <span>$4,501</span></li>
                                        </ul>
                                    </div>
                                    <div className="inner-causes-btn">
                                        <Link href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SKD88K8R387KQ&source=url"><a className="theme-btn">donate now</a></Link>
                                    </div>
                                    
                                </div>
                                <div className="blog-inner-content-2">
                                    <p className="causes__text" style={{"color":"green"}}>
                                    ACTIVE CAMPAIGN
                                    </p>
                                    <p className="causes__text">
                                    Rife with political conflicts, war devastation, and famine, Yemen has over 
                                    20 million of its 29 million people suffering from food insecurity (World Food 
                                    Programme). According to the United Nations Association - UK, a child dies 
                                    every 10 minutes from malnutrition or disease. The proxy war has worsened the 
                                    dire humanitarian crisis by imposing severe restrictions on the flow of aid into 
                                    Yemen. The United Nations Office for Coordination of Humanitarian Affairs 
                                    reported that 14.3 million people, almost 50% of the population, need some 
                                    form of aid to sustain their lives. 
                                    </p>
                                    <p className="causes__text causes__text2">
                                    The core principle of our mission is sustainably alleviating poverty throughout 
                                    the Middle East. Our campaign aims to generate streams of income by distributing 
                                    animals to impoverished families, where they can use animal produce for cooking 
                                    meals and sell the surplus in local markets. This project will be facilitated 
                                    through our partnership with the Yemen Relief and Reconstruction Foundation 
                                    (YRRF). YRRF’s extensive network in Yemen renders it one of the few nonprofit 
                                    organizations that can provide direct relief to the region. You can learn more 
                                    about YRRF’s other impactful projects on their website,   
                                    <Link href = "https://yemenfoundation.org/project/income-generation/"><a> linked here</a></Link>. 
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
                                        Our goal is to raise $17,500 total to fund the purchase, delivery, and implementation of the required items to create three separate income generation projects. The first project will consist of purchasing 80 goats, feed, and veterinary services to be implemented in Hudaydah Governorate in Yemen. This project will be able to sustain 20 families, who will each receive 4 goats. The second and third projects will consist of purchasing 550 egg-laying chickens with feed for a total of 1100 chickens. These two projects will be implemented in two other Governorates, and are projected to support approximately 100 families who will each receive 11 chickens. On average, each family in Yemen has 6 members; thus, the total work from our three projects are expected to impact 720 people. Previous YRRF projects that leveraged goats for income generation report that no animals were sold or slaughtered within a year.  Rather, each family’s flock had approximately doubled in size. In order to ensure effective use of the animals, the families are visited quarterly to monitor impact and give advice about flock raising. Please support this project by donating directly or visiting our <a href="/shop">Shop</a>, where 100% of profits are donated to this active campaign! If our fundraising goal is exceeded, the remaining funds will fund other similar income generation projects through YRRF. The costing breakdown is listed below: 
                                    </p>
                                    <div>
                                    <ul>
                                        <li>80 goats: $8,000</li>
                                        <li>40 bags of feed: $400</li>
                                        <li>Veterinary Services: $300</li>
                                        <li>Purchase and distribute chickens (550): $4000</li>
                                        <li>Chicken feed: $100</li>
                                        <li>Purchase and distribute chickens (550): $4000</li>
                                        <li>Chicken feed: $100</li>
                                        <li>Administration, logistics, transportation and distribution cost: $600</li>
                                    </ul>
                                    <br/>
                                    </div>
                                    <div>
                                    <p className="causes_text">
                                        Further information can be found here: <Link href = "https://yemenfoundation.org/project/income-generation/"><a>https://yemenfoundation.org/project/income-generation/</a></Link>
                                    </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-4">
                        <div className="sidebar-shared">
                            <div className="side-widget">
                                <h2 className="widget__title">Share Cause</h2>
                                <div className="side-share-profile">
                                    <ul>
                                        <li><a href="/farming-income-generation"><i className="fa fa-link"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default FarmingIncomeGen;
