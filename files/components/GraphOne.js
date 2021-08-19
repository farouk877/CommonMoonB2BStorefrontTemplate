import React, {Component} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class GraphOne extends Component {
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
        return(
            <section className="about-area">
                <div className="container">
                    <div className="row">
                        <section className="mixer-area3">
                            <div className="container">
                                <div className="row fun-content-wrap">
                                    <div className="col-lg-6" style={{'background-color':'red'}}>
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
                                </div>
                            </div>
                        </section>
                        <div className="col-lg-7">
                            <div className="about-heading">
                                <div className="section-heading">
                                    <div className="section-icon">
                                        <img src="/images/section-icon.png" alt="section-icon" />
                                    </div>
                                    <h2 className="section__title">How We Do It</h2>
                                    <p className="section__meta">how does project break the cycle fundraise?</p>
                                    <p className="section__desc">
                                        Every few months, we partner with a different non-profit organization and select a 
                                        campaign we want to support. We do the leg work when it comes to creatively 
                                        fundraising. Currently, Project Break The Cycle’s main fundraising streams are 
                                        external merchandise sales and internal corporate matching programs. Over the 
                                        duration of an active campaign, all donations and 100% of profits go towards that 
                                        specific campaign. After a campaign concludes, donations are still accepted for it, 
                                        although 100% of profits from merchandise sales will go to the now active campaign. 
                                    </p>
                            </div>
                            </div>
                        </div>
                        
                    </div>

                    {/* <div className="row">
                        
                        <div className="col-lg-7">
                            <div className="about-heading">
                                <div className="section-heading">
                                    <div className="section-icon">
                                        <img src="/images/section-icon.png" alt="section-icon" />
                                    </div>
                                    <h2 className="section__title">Our Founding Story</h2>
                                    <p className="section__meta">why do we exist?</p>
                                    <p className="section__desc">
                                    “The idea of Project Break The Cycle started when our group of friends noticed a lack of transparency in fundraising initiatives from large nonprofit organizations. Back in highschool, our Humanitarian Club would always have fundraisers for NPOs with global footprints, but we never actually understood where our money went. We combined our hobbies in fashion and needs for organizational transparency to create Project Break The Cycle - an organization leveraging creative fundraising mechanisms to empower other proven, transparent, and relevant NPO’s. After our initial Cherry Blossom sweatshirt sale, we developed a network of people wanting to support meaningful causes but also receive a piece of memorabilia in return. And we haven’t looked back since.” - Farouk Marhaba, Founder</p>
                            
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="about-semi-img">
                                <img src="/images/logo_white_padding_400x349.png" alt="" />
                            </div>
                        </div>
                    </div> */}

                
                </div>
            </section>
        );
    }
}

// const GraphOne = () => {
//     return (
//         <section className="about-area">
//             <div className="container">
//                 <div className="row">
//                 <div className="col-lg-5">
//                                 <div className="fun-content">
//                                     <div className="fun-item fun-item1">
//                                         <i className="icon-charity"></i>
//                                         <h3 className="counter">
//                                             $ <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 16631 : 0} /></VisibilitySensor>
//                                         </h3>
//                                         <p className="fun__text">raised for our <a href="/orphan-scholarship-fund">first campaign</a></p>
//                                     </div>
//                                 </div>
//                                 <div className="fun-content">
//                                     <div className="fun-item fun-item2">
//                                         <i className="icon-cancer"></i>
//                                         <h3 className="counter">
//                                             $ <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 20000 : 0} /></VisibilitySensor>+
//                                         </h3>
//                                         <p className="fun__text">raised to date</p>
//                                     </div>
//                                 </div>
//                             </div>
//                     <div className="col-lg-7">
//                         <div className="about-heading">
//                             <div className="section-heading">
//                                 <div className="section-icon">
//                                     <img src="/images/section-icon.png" alt="section-icon" />
//                                 </div>
//                                 <h2 className="section__title">How We Do It</h2>
//                                 <p className="section__meta">how does project break the cycle fundraise?</p>
//                                 <p className="section__desc">
//                                     Every few months, we partner with a different non-profit organization and select a 
//                                     campaign we want to support. We do the leg work when it comes to creatively 
//                                     fundraising. Currently, Project Break The Cycle’s main fundraising streams are 
//                                     external merchandise sales and internal corporate matching programs. Over the 
//                                     duration of an active campaign, all donations and 100% of profits go towards that 
//                                     specific campaign. After a campaign concludes, donations are still accepted for it, 
//                                     although 100% of profits from merchandise sales will go to the now active campaign. 
//                                 </p>
//                          </div>
//                         </div>
//                     </div>
                    
//                 </div>

//                 {/* <div className="row">
                    
//                     <div className="col-lg-7">
//                         <div className="about-heading">
//                             <div className="section-heading">
//                                 <div className="section-icon">
//                                     <img src="/images/section-icon.png" alt="section-icon" />
//                                 </div>
//                                 <h2 className="section__title">Our Founding Story</h2>
//                                 <p className="section__meta">why do we exist?</p>
//                                 <p className="section__desc">
//                                 “The idea of Project Break The Cycle started when our group of friends noticed a lack of transparency in fundraising initiatives from large nonprofit organizations. Back in highschool, our Humanitarian Club would always have fundraisers for NPOs with global footprints, but we never actually understood where our money went. We combined our hobbies in fashion and needs for organizational transparency to create Project Break The Cycle - an organization leveraging creative fundraising mechanisms to empower other proven, transparent, and relevant NPO’s. After our initial Cherry Blossom sweatshirt sale, we developed a network of people wanting to support meaningful causes but also receive a piece of memorabilia in return. And we haven’t looked back since.” - Farouk Marhaba, Founder</p>
                        
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-5">
//                         <div className="about-semi-img">
//                             <img src="/images/logo_white_padding_400x349.png" alt="" />
//                         </div>
//                     </div>
//                 </div> */}

             
//             </div>
//         </section>
//     );
// };

export default GraphOne;
