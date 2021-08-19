import React, {Component} from 'react';
import Link from 'next/link';
import ExamplePaypal from './ExamplePaypal';

class Donate extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Donation Amount: $' + this.state.value + ".00");
        event.preventDefault();
      }
    
    render() {
        return (
            <section className="donate-area2">
                <div className="container">
                    <div className="row donate-content-wrap">
                        <div className="col-lg-8">
                            <div className="donate-item">
                                <h3 className="donate__title">Enter Your Donation</h3>
                                <div className="form-shared">
                                    
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="yellow-form">
                                                    <input type="string" value = {this.state.value} onChange={this.handleChange} className="form-control" />
                                                        <span className="dollar-sign">$</span>
                                                        <span className="number-symble">.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>


                        <ExamplePaypal
                            amount = {this.state.value}
                            currency = {'USD'}
                        />


                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar-shared">
                                <div className="side-widget blog-content">
                                    <div className="blog-item">
                                        <div className="blog-img">
                                            <img src="/images/img15.jpg" alt="" />
                                        </div>
                                        <div className="blog-inner-content">
                                            <h3 className="blog__title"><Link href="/causes-detail"><a>They Want to Study</a></Link>
                                            </h3>
                                            <ul className="blog__list">
                                                <li><i className="icon-target"></i> Goal: <span>$30,000</span></li>
                                                <li><i className="fa fa-line-chart"></i> Raised: <span>25,270</span></li>
                                            </ul>
                                            <p className="blog__desc">Raised by 25 donors</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="side-widget">
                                    <div className="author-box">
                                        <div className="author__avatar">
                                            <img src="/images/author-avatar.jpg" alt="" />
                                        </div>
                                        <div className="author__detail">
                                            <span className="author__meta">created april 11, 2018</span>
                                            <h4 className="author__title">Organizer: <a href="#">Jessica Smith</a></h4>
                                            <ul className="author__list">
                                                <li><i className="fa fa-tag"></i> Education</li>
                                                <li><i className="fa fa-map-marker"></i> Wrightwood, Canada</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

export default Donate;
