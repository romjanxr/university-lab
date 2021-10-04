import React from 'react';
import UseServices from '../../hooks/UseServices/UseServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services] = UseServices();
    return (
        <div className="services container">
            <h2 className="service-title">Our Services</h2>
            <div className="row mt-3">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}>
                        <button className="btn-service">READ MORE</button>
                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;