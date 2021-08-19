import React, {Component} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

class RaisingMoney extends Component {
    constructor(){
        super()
        this.state = {
            startCounter: false
        }
    }

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({startCounter: true});
        }
    }


    render() {
        return (
            <div>
                {/* <section className="mixer-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="section-heading mixer-heading">
                                    <div className="section-icon">
                                        <img src="/images/section-icon.png" alt="section-icon" />
                                    </div>
                                    <h2 className="section__title text__white">100% of donations and profits to the people and causes you care about</h2>
                                    <div className="button-shared">
                                        <a href="/campaigns" className="theme-btn">Campaigns</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="mixer-area3">
                    <div className="container">
                        <div className="row fun-content-wrap">
                            <div className="col-lg-6" style={{'background-color':''}}>
                                <div className="fun-content">
                                    <div className="fun-item fun-item1">
                                        <i className="icon-charity"></i>
                                        <h3 className="counter">
                                            $ <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 16650 : 0} /></VisibilitySensor>
                                        </h3>
                                        <p className="fun__text">raised for our <a href="/orphan-scholarship-fund">first campaign</a></p>
                                    </div>
                                </div>
                                <div className="fun-content">
                                    <div className="fun-item fun-item2">
                                        <i className="icon-cancer"></i>
                                        <h3 className="counter">
                                            $ <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 20000 : 0} /></VisibilitySensor>+
                                        </h3>
                                        <p className="fun__text">generated to date</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                    {/* <p className="section__desc">
                                        Every few months, we partner with a different non-profit organization and select a 
                                        campaign we want to support. We do the leg work when it comes to creatively 
                                        fundraising. Currently, Project Break The Cycle’s main fundraising streams are 
                                        external merchandise sales and internal corporate matching programs. Over the 
                                        duration of an active campaign, all donations and 100% of profits go towards that 
                                        specific campaign. After a campaign concludes, donations are still accepted for it, 
                                        although 100% of profits from merchandise sales will go to the now active campaign. 
                                    </p> */}
                                        <div >
                                            <div className = "fun-content">
                                                <div className = "fun-item fun-item1">
                                                    <img style={{'maxWidth':'500px','width':'100%', 'paddingBottom': 50, "paddingTop": 20, "paddingRight": 100,'position': 'relative'}} src="/images/fundingChart.PNG" alt="" />
                                                </div>
                                            </div>
                                            
                                        </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default RaisingMoney;