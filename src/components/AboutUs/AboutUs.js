import React from 'react';
import './AboutUs.css'
import img from '../../images/img2.jpeg'

const AboutUs = () => {
    return (
        <div>
            <section className="about-section d-flex align-items-center">
                <div className="row mx-5">
                    <div className="col-md-6 border-end">
                        <h1 className="about-title">About <br /> University Lab</h1>
                    </div>
                    <div className="col-md-6">
                        <p className="details">University Lab is at the frontier of academic and intellectual discovery. Those who venture here—to learn, research, teach, work, and grow—join nearly four centuries of students and scholars in the pursuit of truth, knowledge, and a better world.</p>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="row mx-5">
                    <div className="col-md-6">
                        <h2 className="mb-3">University Lab At a Glance</h2>
                        <img className="img-fluid" src={img} alt="" />
                    </div>
                    <div className="col-md-6 ps-4">
                        <div className="mb-3">
                            <h3 className="glance-title">1636</h3>
                            <p className="glance-detail">the year that University Lab was established.</p>
                        </div>
                        <div className="mb-3">
                            <h3 className="glance-title">23,731</h3>
                            <p className="glance-detail">students study at University Lab.</p>
                        </div>
                        <div className="mb-3">
                            <h3 className="glance-title">4m+</h3>
                            <p className="glance-detail">LabX participants globally (LabX is the University’s faculty-driven online platform</p>
                        </div>
                        <div className="mb-3">
                            <h3 className="glance-title">400k+</h3>
                            <p className="glance-detail">alumni worldwide.</p>
                        </div>
                        <div className="mb-3">
                            <h3 className="glance-title">$645 million</h3>
                            <p className="glance-detail">granted in financial aid and scholarships in the 2020 fiscal year.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;