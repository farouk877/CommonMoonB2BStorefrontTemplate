import React, {Component} from 'react';

class Footer extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            scrollBtn: false,
            email: ''
          }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
      }
    
      handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
      }
    
      handleSubmit(event) {
        // alert('Donation Amount: $' + this.state.value + ".00");
        event.preventDefault();
        this.sendMessage()
      }

      sendMessage = () => {
        const axios = require('axios');


        const formURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeJ0W6ev06uN-ApuCmN_gj_444efhe0M7ZZy5Ys9SPxTNfpIw/formResponse" 

        const emailID = "entry.704330290"
    

        const formData = new FormData()

        const CORS_PROXY = 'https://cors-escape.herokuapp.com/'


        formData.append(emailID, this.state.email)


        axios.post(formURL, formData)
            .then(() => {
                this.setState({
                    email: '',
                })
            }).catch(() => {
                this.setState({
                    email: '',
                })
            })
       
      }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {

      if (window.scrollY > 100) {
        this.setState({
            scrollBtn: true
        });
      } else if (window.scrollY < 100) {
        this.setState({
            scrollBtn: false
        });
      }

    }

    scrollTop = () => {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <section className="footer-area">
                <div className="newsletter-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 mx-auto text-center">
                                    <div className="section-heading footer-heading">
                                        <div className="section-icon">
                                            <img src="/images/section-icon.png" alt="section-icon" />
                                        </div>
                                        <h2 className="section__title text__white">Newsletter</h2>
                                        <p className="section__meta">stay updated</p>
                                    </div>
                                    <div className="newsletter-form">
                                        <div className="form-shared">
                                            <form onSubmit={this.handleSubmit}>
                                                <div className="row">
                                                    <div className="col-lg-9">
                                                        <div className="form-group">
                                                            <input id="emailAddressMsgInput" name = 'email' value = {this.state.email} type="email" autoComplete="email" className="form-control" placeholder="Email address" onChange = {this.handleChange} required/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <button className="theme-btn submit__btn"
                                                                type="submit">subscribe
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-top">
                        <div className="container">
                            <div className="row footer-widget-wrap">
                                <div className="col footer-item footer-item1">
                                    <h3 className="widget__title">Quick Links</h3>
                                    <ul className="foot__links">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about">About</a></li>
                                        <li><a href="/campaigns">Campaigns</a></li>
                                        <li><a href="/blog">Updates</a></li>
                                        <li><a href="/contact">Contact</a></li>
                                        <li><a href="/shop">Shop</a></li>
                                        <li><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SKD88K8R387KQ&source=url">Donate</a></li>
                                    </ul>
                                    <ul className="side-social">
                                        <li>
                                            <a href="https://instagram.com/projectbreakthecycle"><i className="fa fa-instagram"></i></a>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <a href="https://facebook.com/projectbreakthecycle"><i className="fa fa-facebook"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col footer-item footer-item2">
                                    <h3 className="widget__title">Legal</h3>
                                    <ul className="contact__info">
                                        <li>Project Break The Cycle Inc</li>
                                        <li>Registered 501(c)3 nonprofit organization</li>
                                        <li>EIN: 81-4564351</li>
                                        <li>Bridgewater, NJ but serving the globe</li>
                                        <li><a href="mailto:info@projectbreakthecycle.com">info@projectbreakthecycle.com</a></li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="copyright-desc">
                                        <p>© Copyright 2020 <a href="https://www.projectbreakthecycle.com">Project Break The Cycle</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div onClick={this.scrollTop} id="back-to-top" className={this.state.scrollBtn ? 'back-btn-shown' : ''}>
                    <i className="fa fa-angle-up" title="Go top"></i>
                </div>

            </div>
        );
    }
}

export default Footer;
