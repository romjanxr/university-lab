import React from 'react';
import { useHistory } from 'react-router';
import './NotFound.css'

const NotFound = () => {
    const history = useHistory();
    const handleHomeBtn = () => {
        history.push('./home');
    }
    return (
        <div>
            <div className="w-50 mx-auto my-5">
                <img className="img-fluid" src="https://raistheme.com/wp/gostudy/wp-content/themes/gostudy/img/404.png" alt="" />
            </div>
            <div className="text-center">
                <h2>Sorry We Can`t Find That Page!</h2>
                <p>The page you are looking for was moved, removed, renamed or never existed.</p>
                <button className="btn-home" onClick={handleHomeBtn}>TAKE ME HOME</button>
            </div>
        </div>
    );
};

export default NotFound;