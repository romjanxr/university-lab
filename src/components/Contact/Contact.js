import React from 'react';
import { useHistory } from 'react-router';
import ContactForm from '../ContactForm/ContactForm';
import './Contact.css'

const Contact = () => {
    const history = useHistory();
    const handleContactBtn = () => {
        history.push('/contact');
    }

    return (
        <div className="contact-section d-flex justify-content-center align-items-center">
            <div className="p-5 w-75 bg-white">
                <div className="row">
                    <div className="col-md-4">
                        <button onClick={handleContactBtn} className="btn-service mb-2">Contact Us</button>
                        <h3 className="mb-2">Request a free Quote</h3>
                        <p>You can contact us via phone number, email or by submitting the form!!</p>

                        <div className="d-flex justify-content-between border-bottom mb-3 mt-4">
                            <h5>SECRETARY :</h5>
                            <h5>740529705</h5>
                        </div>
                        <div className="d-flex justify-content-between border-bottom mb-3">
                            <h5>COMMERCIAL :</h5>
                            <h5>450529678</h5>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                            <h5>DIRECTOR :</h5>
                            <h5>980529528</h5>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-6">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;