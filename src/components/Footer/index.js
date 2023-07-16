import React from 'react';
import { Link } from 'react-router-dom';

function Footer () {
    return (
        <footer>
            <ul className='footer_ul'>
                <li className='footer_li'>
                    <Link to='/Chazs-React-Portfolio'>Home</Link>
                </li>
                <li className='footer_li'>
                    <Link to='/resume'>Resume</Link>
                </li>
                <li className='footer_li'>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
            <p className='footer_p'>©2022 Chaz Graham portfolio. All right reserved.</p>
        </footer>
    )
}

export default Footer;