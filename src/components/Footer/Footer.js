import { faFacebook, faLinkedinIn, faPinterest, faReddit, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'
import footerImg from '../../images/footer.png'

const Footer = () => {
    return (
        <div className="footer-bg d-flex justify-content-center align-items-center">
            <div>
                <div className="text-center">
                    <img className="w-50" src={footerImg} alt="" />
                </div>
                <div className="mt-3 text-center">
                    <FontAwesomeIcon className="footer-icon" icon={faFacebook} />
                    <FontAwesomeIcon className="footer-icon" icon={faTwitter} />
                    <FontAwesomeIcon className="footer-icon" icon={faPinterest} />
                    <FontAwesomeIcon className="footer-icon" icon={faLinkedinIn} />
                    <FontAwesomeIcon className="footer-icon" icon={faReddit} />
                </div>
            </div>
        </div>
    );
};

export default Footer;