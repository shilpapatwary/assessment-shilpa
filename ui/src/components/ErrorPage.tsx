import React from 'react';
import Header from './Header';
import Footer from './Footer';
import logo from '../assets/images/logo.png';
import '../styles/ErrorPage.scss';

const  ErrorPage  = () => {
        return (
            <div id="main">
                <Header></Header>
                <section className="error__section main__content">
                    <div className="auto1__logo"><img src={logo} alt="logo" /></div>
                    <div className="error__text">
                        <div className="heading__bold"><span>404 - Not Found</span></div>
                        <div>Sorry, the page you are looking for does not exist. You can always go back to the <a href="/">homepage</a>.</div>
                    </div>
                </section>
                <Footer></Footer>
        </div> )

}

export default ErrorPage;