import React from 'react';
import { Link } from 'react-router-dom';
import UseServices from '../../hooks/UseServices/UseServices';
import Contact from '../Contact/Contact';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const [services] = UseServices();

    return (
        <div>
            <section className="hero-section d-flex justify-content-center align-items-center">
                <div className="details-container">
                    <div>
                        <h1>Education <br /> Learning Courses</h1>
                        <Link to="/about">
                            <button className="btn-outline">ABOUT US</button>
                        </Link>
                        <Link to="/services">
                            <button className="btn-filled">SERVICES</button>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="services container">
                <div className="row">
                    <h2 className="service-title">Our Services</h2>
                    {
                        services.slice(0, 4).map(service => <Service
                            key={service.id}
                            service={service}>
                            <button className="btn-read">READ MORE</button>
                        </Service>)
                    }
                </div>
            </section>
            <Contact />
        </div>
    );
};

export default Home;