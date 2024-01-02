import React, { forwardRef } from 'react';

import * as Style from './style.js';

const Contact = forwardRef((props, ref) => {
    return (
        <Style.Contact ref={ref}>
            <div className="wrap">
                <h2>CONTACT</h2>
                <ul>
                    <li><b>TALL</b> <span> : 010-7181-3987</span></li>
                    <li><b>E-MAIL</b> <span> : kwog5050gmail.com</span></li>
                </ul>
            </div>
        </Style.Contact>
    );
});

export default Contact;