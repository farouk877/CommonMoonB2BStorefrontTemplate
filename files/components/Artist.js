import React, {Component} from 'react';
import RGF from 'react-google-forms'

class Artist extends Component {
 
    constructor(props) {
        super(props);
        this.state = {name: '', email: '', phoneNumber: '', msg: '', msg2: '', msg3:'', msg4:''};
    
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


        const formURL = "https://docs.google.com/forms/u/1/d/e/1FAIpQLSfEYGvPA85hIzPYaYVZJ0ctDuOMV5TGVFr6-OhT_1yzRgSoPg/formResponse"

        const nameID = "entry.1781500597"
        const emailID = "entry.1640447617"
        const numberID = "entry.297979220"
        const msgID = "entry.639437020"
        const msg2ID = "entry.1002179803"
        const msg3ID = "entry.1536260870"
        const msg4ID = "entry.197585373"
        // Add Radio buttons

        const formData = new FormData()

        const CORS_PROXY = 'https://cors-escape.herokuapp.com/'


        formData.append(nameID, this.state.name)
        formData.append(emailID, this.state.email)
        formData.append(numberID, this.state.phoneNumber)
        formData.append(msgID, this.state.msg)
        formData.append(msg2ID, this.state.msg2)
        formData.append(msg3ID, this.state.msg3)
        formData.append(msg4ID, this.state.msg4)


        axios.post(formURL, formData)
            .then(() => {
                this.setState({
                msg: '',
                email: '',
                name: '',
                phoneNumber: '',
                msg2: '',
                msg3: '',
                msg4: ''
                })
            }).catch(() => {
                this.setState({
                    msg: '',
                    email: '',
                    name: '',
                    phoneNumber: '',
                    msg2: '',
                    msg3: '',
                    msg4: ''
                })
            })
       
      }

    render() {
        return (
            <section className="contact-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <div className="section-icon">
                                    <img src="/images/section-icon.png" alt="section-icon" />
                                </div>
                                <h2 className="section__title">Work With Us</h2>
                                <p className="section__desc">
                                Hello! We are a 501(c)3 fundraising nonprofit organization that utilizes 100% of profits from selling uniquely designed clothing to empower nonprofit organizations aimed at sustainably breaking the cycle of poverty in the Middle East.


                                    <br/><br/>
                                    To raise funds in creative ways, Project Break The Cycle produces unique merchandise in which 100% of profits are donated to the current campaign. Every few months, we switch campaigns and partner with a different nonprofit to help another cause. We need artists that can adequately capture the condition of the population that we serve through the medium of fashion design.



                                    {/* <a href="/farming-income-generation"> here</a>. */}
                                    <br/><br/>
                                    Right now, we are partnered with the Yemen Relief and Reconstruction Foundation, a nonprofit focused on creating sustainable, practical solutions towards reconstruction in Yemen, as well as raising awareness about the current Yemeni humanitarian crisis. We’re currently funding their Income Generation campaign, which you can learn more about on our Campaigns page. More information can be found at yemenfoundation.org.

                                    <br/><br/>
                                    These designs are open-ended to whatever you think is appropriate, but are encouraged to be inspired by Yemeni culture, nature, or the current crisis. Your design can be embroidered or screen printed, so keep that in mind!

                                    <br/><br/>
                                    To date, Project Break The Cycle has raised over $20,000 for amazing causes. The designs you will be creating will significantly impact people entangled in Yemen's humanitarian crisis, and can change lives forever.
In exchange for your design contributions, we will be providing you with exposure on our current platform, giving you the spotlight and credit on your work through our merchandise (your name/brand on every piece of merchandise produced) and social media features, or monetary payment depending on the submission. We are accepting artwork on a rolling basis. Please allow 1-2 weeks for us to get back to you. Email farouk@projectbreakthecycle.com with any questions.
                                </p>
                                <ul className="section__list">
                                    <li><a href="https://www.instagram.com/projectbreakthecycle/?hl=en"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-shared">
                            
                                <form onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6 form-group">
                                            <input className="form-control" name = 'name' value = {this.state.name}  type="text" autoComplete="given-name" placeholder="Full Name" onChange = {this.handleChange} required/>
                                        </div>

                                        <div className="col-lg-6 col-sm-6 form-group">
                                            <input id="emailAddressMsgInput" name = 'email' value = {this.state.email} type="email" autoComplete="email" className="form-control" placeholder="Email address" onChange = {this.handleChange} required/>
                                        </div>

                                        <div className="col-lg-12 form-group">
                                            <input id="phoneNumberMsgInput" name = 'phoneNumber' value = {this.state.phoneNumber} type="number" className="form-control" placeholder="Phone Number" onChange = {this.handleChange}/>
                                        </div>

                                        <div className="col-lg-12 col-sm-12 form-group">
                                            <textarea id="messageContentInput" name = 'msg' value={this.state.msg} type="text" className="form-control" placeholder="[Optional] Do you have a portfolio or any previous work? Provide a Link!" onChange = {this.handleChange} required></textarea>
                                        </div>

                                        <div className="col-lg-12 col-sm-12 form-group">
                                            <textarea id="messageContentInput" name = 'msg2' value={this.state.msg2} type="text" className="form-control" placeholder="[Optional] Do you have any art social media accounts? Provide a Link!" onChange = {this.handleChange} required></textarea>
                                        </div>

                                        <div className="col-lg-12 col-sm-12 form-group">
                                            <textarea id="messageContentInput" name = 'msg3' value={this.state.msg3} type="text" className="form-control" placeholder="[Optional] List any previous experience in clothing design." onChange = {this.handleChange} required></textarea>
                                        </div>

                                        <div className="col-lg-12 col-sm-12 form-group">
                                            <textarea id="messageContentInput" name = 'msg4' value={this.state.msg4} type="text" className="form-control" placeholder="[Optional] Describe your design idea in 1-3 sentences." onChange = {this.handleChange} required></textarea>
                                        </div>

                                
                                        <div className="col-lg-12 col-sm-12">
                                            <button className="theme-btn submit__btn" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                    {/* <div className="row contact-detail-action">
                        <div className="col-lg-4">
                            <div className="contact-item contact-item1">
                                <h3 className="contact__title">About</h3>
                                <p className="contact__desc">
                                    We are looking for artists and nonprofits to collobrate with us
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-item contact-item2">
                                <h3 className="contact__title">Address</h3>
                                <p className="contact__desc">
                                    660 broklyn street , 88 new york, United states of
                                    america
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-item contact-item3">
                                <h3 className="contact__title">Contact</h3>
                                <p className="contact__desc">
                                    needhelp@oxpitan.com <br />
                                    666 888 000
                                </p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        );

    }
};
export default Artist;
