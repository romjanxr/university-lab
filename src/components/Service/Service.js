import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Service.css'

const Service = props => {
    const { title, description, icon } = props.service;
    return (
        <div className="col-md-3 mt-5">
            <div>
                <div>
                    <FontAwesomeIcon className="icon" icon={icon} />
                </div>
                <div>
                    <h2 className="title">{title}</h2>
                    <p className="description">{description.slice(0, 150)}</p>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Service;