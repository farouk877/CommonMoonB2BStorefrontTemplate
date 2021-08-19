import React from 'react';
import Link from 'next/link';

const FarmingIncomeGenCM = () => {
    return (
        <section className="causes-detail-area-cm">
            <div className="container">
            <div class="row">
                <div class="column">
                    <div className="blog-img">
                        <img src="/images/animals700x400.jpg" alt="" />
                    </div>
                    <br></br>

                    <label for="file">$4,501 raised of $10,000 goal</label>
                    <div class="w3-progress-container w3-round-xlarge">
                        <div class="w3-progressbar w3-round-xlarge"></div>
                    </div>
        
                </div>
                    
                <div class="column2">
                    <span className="blog__tag" style={{ color: '#008000' }}><i className="fa fa-flash"></i> Active</span>

                    <h1>Campaign Summary</h1>
                    <br></br>

                    <p className="causes__text">
                    Yemen is going through the largest humanitarian crisis in human history. We partnered with the
                    Yemen Relief and Reconstruction Foundation (YRRF) to give farm animals like chickens and goats
                    to poor and vulnerable families in Yemen. By donating farm animals, we want to help these families
                    have a consistent, sustainable source of food and income. Families can consume eggs and milk, sell
                    what products they have left over, and even breed their animals to grow their farms in the long term.
                    </p>

                </div>
            </div>

                <div className="row blog-content-wrap">
                    <div className="col-lg-12">
                        <div className="blog-content">
                            <div className="blog-item">
                            

                                <div className="blog-inner-content-2">
                                    <h1 className = "blog__title">Campaign Progress</h1>
                                    <br></br>
                                    <p className="causes__text">
                                    In October 2020, we donated 500 chickens to 100 families (primarily woman-led households)
                                    in a village called Kaedenah in Hajjah Governorate, Yemen. Each family received 4 egg-laying 
                                    hens and 1 rooster, which allows families to breed chickens. The total cost for the project was 
                                    $2,360USD. These chickens can eat left over food or grains in the area, and don’t need special feed. 
                                    
                                    </p>
                                    <p className="causes__text causes__text2">
                                    Future updates are on the way! If you want to stay up-to-date with our campaigns, please sign up
                                    for our newsletter. The link's at the bottom of the page.
                                    </p>


                                   
                                    <div>
                                        <p className="causes_text">
                                            Further information can be found here: <Link href = "https://yemenfoundation.org/project/income-generation/"><a>https://yemenfoundation.org/project/income-generation/</a></Link>
                                        </p>
                                        <br></br>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <div class="row">
                <div class="column">
                    <h1>Fun Facts</h1>
                    <br></br>
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
        
                </div>
                    
                <div class="column2">

                    <h1>How Collections Are Designed</h1>
                    <br></br>

                    <p className="causes__text">
                    Our collections are designed by talented volunteer artists that are interested in impacting 
                    communities with their work. If you are interested in contributing your art and design talents
                    to a future Common Moon collection, please reach out to art@commonmoon.org to express your interest!
                    </p>

                    <br></br>
                    <p className="dm-text">
                    DM us a picture of you wearing your new merch for a chance to be featured on our page!
                    </p>

                </div>
            </div>


            </div>
        </section>
    );
};

export default FarmingIncomeGenCM;
