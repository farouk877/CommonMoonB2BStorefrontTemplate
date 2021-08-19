import React, {Component} from 'react';
import Link from 'next/link';

class NavOne extends Component {
    constructor(){
        super()
        this.state = {
          sticky: false
        };
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);

        //Mobile Menu
        this.mobileMenu();
    }

    handleScroll = () => {

      if (window.scrollY > 100) {
        this.setState({
            sticky: true
        });
      } else if (window.scrollY < 100) {
        this.setState({
            sticky: false
        });
      }

    }

    mobileMenu = () => {
        //Mobile Menu Toggle
        let mainNavToggler = document.querySelector(".mobile-menu-toggle");
        let mainNav = document.querySelector(".side-nav-container");

        mainNavToggler.addEventListener("click", function () {
            mainNav.classList.add('active');
        });

        //Close Mobile Menu
        let closeMenu = document.querySelector(".side-menu-close");
            closeMenu.addEventListener("click", function () {
            mainNav.classList.remove('active');
        });

    }

    render() {
        return (
            <div>
                <header className="header-area">
                    <div className={`header-top header-menu-action ${this.state.sticky ? 'header-fixed' : ''}`}>
                        <div className="container">
                            <div className="row ostion-top-wrap">
                                <div className="col-lg-5 col-sm-5 site-branding">
                                    <div className="logo-action d-flex align-items-center">
                                        <div className="ostion-logo">
                                            <Link href="/">
                                                <a>
                                                    <img src="/images/logo_transparent_padding.png" alt="PBTC" title="PBTC" />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="header-btn ml-auto">
                                            <Link href="/shop">
                                                <a className="theme-btn2">Shop</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-sm-7 ostion-menu">
                                    <div className="ostion-menu-innner">
                                        <div className="ostion-menu-content">
                                            <div className="navigation-top">
                                                <nav className="main-navigation">
                                                    <ul>
                                                        <li className="active"><Link href="/"><a>Home</a></Link></li>
                                                        <li className="active"><Link href="/about"><a>About</a></Link>
                                                            <ul className="dropdown-menu-item">
                                                                <li><Link href="/about"><a>About Us</a></Link></li>
                                                                <li><Link href="/nonprofit-partners"><a>Nonprofit Partners</a></Link></li>
                                                                <li><Link href="/corporate-relations"><a>Corporate Relations</a></Link></li>
                                                            </ul>
                                                        </li>
                                                        <li className="active"><Link href="/campaigns"><a>Campaigns</a></Link></li>
                                                        <li className="active"><Link href="/blog"><a>Updates</a></Link></li>
                                                        <li className="active"><Link href="/contact"><a>Contact</a></Link>
                                                            <ul className="dropdown-menu-item">
                                                                <li><Link href="/artist"><a>Artists</a></Link></li>
                                                            </ul>
                                                        </li>
                                                        <span className="header-btn ml-auto"><Link href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SKD88K8R387KQ&source=url"><a className="theme-btn2">Donate</a></Link></span>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="mobile-menu-toggle">
                                            <i className="fa fa-bars"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="side-nav-container">
                        <div className="humburger-menu">
                            <div className="humburger-menu-lines side-menu-close"></div>
                        </div>
                        <div className="side-menu-wrap">
                            <ul className="side-menu-ul">
                                <li className="sidenav__item"><Link href="/shop"><a className="theme-btn2">Shop</a></Link></li>
                                <li className="sidenav__item"><a href="/">Home</a></li>
                                <li className="sidenav__item"><a href="/about">About</a>
                                    <ul className="side-sub-menu">
                                        <li><Link href="/about"><a>About Us</a></Link></li>
                                        <li><Link href="/nonprofit-partners"><a>Nonprofit Partners</a></Link></li>
                                        <li><Link href="/corporate-relations"><a>Corporate Relations</a></Link></li>
                                    </ul>
                                </li>
                                <li className="sidenav__item"><a href="/campaigns">Campaigns</a></li>
                                <li className="sidenav__item"><a href="/blog">Updates</a></li>
                                <li className="sidenav__item"><a href="/contact">Contact</a>
                                <ul className="side-sub-menu">
                                        <li><Link href="/artist"><a>Artists</a></Link></li>
                                    </ul>
                                </li>
                                <li className="sidenav__item"><Link href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SKD88K8R387KQ&source=url"><a className="theme-btn">Donate</a></Link></li>
                                {/* <div className="side-btn">
                                    <Link href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SKD88K8R387KQ&source=url"><a className="theme-btn">Donate Now</a></Link>
                                </div> */}
                            </ul>
                            <ul className="side-social">
                                <li><a href="https://facebook.com/projectbreakthecycle"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="https://instagram.com/projectbreakthecycle"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                            
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default NavOne;