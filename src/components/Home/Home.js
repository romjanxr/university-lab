import React from 'react';
import UseServices from '../../hooks/UseServices/UseServices';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const [services] = UseServices();

    return (
        <div>
            <section className="hero-section">
                <div className="details-container">
                    <div>
                        <h1>Education <br /> Learning Courses</h1>
                        <button className="btn-outline">ABOUT US</button>
                        <button className="btn-filled">SERVICES</button>
                    </div>
                </div>
            </section>
            <section className="services container">
                <div className="row">
                    {
                        services.slice(0, 4).map(service => <Service
                            key={service.id}
                            service={service}>
                            <button className="btn-read">READ MORE</button>
                        </Service>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;