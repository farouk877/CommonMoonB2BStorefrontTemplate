import React, {Component} from 'react';

class FaqAreaCorpRel extends Component {

    componentDidMount() {
        new Accordion('.accordion-container');
    }



    render() {
        return (
            <section className="faq-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <div className="section-icon">
                                    <img src="/images/section-icon.png" alt="section-icon" />
                                </div>
                                <h2 className="section__title">Corporate Support</h2>
                                <p className="section__meta">we're thankful for our corporate programs and relationships</p>
                            </div>
                            <div className="faq-img-box">
                                <p>
                                    At Project Break The Cycle, our largest fundraising mechanisms are merchandise sales 
                                    and corporate giving programs. Click on each company to learn more about our 
                                    relationship and what they provide!
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="accordion-container">
                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">Johnson &amp; Johnson</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">
                                            Johnson &amp; Johnson offers Project Break The Cycle 2:1 donation matching, 
                                            up to $25,000 annually. If you are an employee of Johnson &amp; 
                                            Johnson, make sure to donate through the company to have your donation multiplied 
                                            three times!
                                        </p>
                                    </div>
                                </div>

                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">Google</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">
                                            Google provides us with free G Suite commercial services as well as 
                                            $10,000 in monthly Google Ads credit to use at our discretion. 
                                        </p>
                                    </div>
                                </div>

                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">Amazon</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">
                                            Amazon Smile gives customers the ability to shop at smile.amazon.com and donate 0.5% 
                                            of their transaction to Project Break The Cycle at no additional cost to you. 
                                            To set up, go to smile.amazon.com and sign in. Select Project Break The Cycle from 
                                            Bridgewater, NJ as your preferred charity. Now, whenever purchasing items from Amazon, 
                                            make sure you use smile.amazon.com instead!
                                        </p>
                                    </div>
                                </div>

                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">And More!</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">
                                        We are always looking for new companies, whether big or small, to partner with. If you are interested in supporting Project Break The Cycle, please email info@projectbreakthecycle.com to get the conversation started!
                                        </p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FaqAreaCorpRel;