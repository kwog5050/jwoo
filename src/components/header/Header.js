import React, { useState } from 'react';

import * as Style from './style.js';

const Header = ({ bannerRef, aboutRef, skillRef, projectRef, contactRef }) => {
    const [isMobile, setIsMobile] = useState(false);

    const handleScrollButtonClick = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <Style.Header>
            <div className="wrap">
                <div className="flexBox">
                    <h1><a href="/">JWOO</a></h1>

                    <ul className='pc'>
                        <li onClick={() => { handleScrollButtonClick(bannerRef) }}>HOME</li>
                        <li onClick={() => { handleScrollButtonClick(aboutRef) }}>ABOUT</li>
                        <li onClick={() => { handleScrollButtonClick(skillRef) }}>SKILL</li>
                        <li onClick={() => { handleScrollButtonClick(projectRef) }}>PROJECT</li>
                        <li onClick={() => { handleScrollButtonClick(contactRef) }}>CONTACT</li>
                    </ul>

                    <div className="mobile">
                        <i onClick={() => { setIsMobile(!isMobile) }} className="fa-solid fa-bars"></i>

                        <ul className={isMobile ? "on" : ""}>
                            <li onClick={() => { handleScrollButtonClick(bannerRef) }}>HOME</li>
                            <li onClick={() => { handleScrollButtonClick(aboutRef) }}>ABOUT</li>
                            <li onClick={() => { handleScrollButtonClick(skillRef) }}>SKILL</li>
                            <li onClick={() => { handleScrollButtonClick(projectRef) }}>PROJECT</li>
                            <li onClick={() => { handleScrollButtonClick(contactRef) }}>CONTACT</li>
                        </ul>

                        <div onClick={() => { setIsMobile(false) }} className={isMobile ? "bg on" : "bg"}></div>
                    </div>
                </div>
            </div>
        </Style.Header>
    );
};

export default Header;