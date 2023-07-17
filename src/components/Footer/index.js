import React from 'react';
import { Link } from 'react-router-dom';

function Footer () {
    const sendToTop = (location) => {
        if (window.location === location) {
            window.scrollTo(0, 0);
        } else {
            return
        }
    }

    return (
        <footer>
            <ul className='footer_ul'>
                <li className='footer_li'>
                    <Link to='/Chazs-React-Portfolio' onClick={() => sendToTop(window.location)}>Home</Link>
                </li>
                <li className='footer_li'>
                    <Link to='/resume' onClick={() => sendToTop(window.location)}>Resume</Link>
                </li>
                <li className='footer_li'>
                    <Link to='/contact' onClick={() => sendToTop(window.location)}>Contact</Link>
                </li>
            </ul>
            <p className='footer_p'>©2022 Chaz Graham portfolio. All right reserved.</p>
        </footer>
    )
}

export default Footer;