import React, {Component} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

class MixerArea extends Component {
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
                <section className="mixer-area">
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
                </section>

                <section className="mixer-area2">
                    <div className="container">
                        <div className="row fun-content-wrap">
                            <div className="col-lg-6">
                                <div className="fun-content">
                                    <div className="fun-item fun-item1">
                                        <i className="icon-charity"></i>
                                        <h3 className="counter">
                                            $ <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 16631 : 0} /></VisibilitySensor>
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
                                        <p className="fun__text">raised to date</p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-6">
                                <div className="fun-content-slide">
                                        <div className="fun-slide-item">
                                            <div className="icon-quote">“</div>
                                            <h4 className="funslide__text">
                                                Our rigorous nonprofit vetting process gives our supporters peace of mind knowning
                                                that their contributions are in good hands.
                                            </h4>
                                            <p className="funslide__name">Farouk Marhaba, Founder &amp; President</p>
                                        </div>  

        
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default MixerArea;