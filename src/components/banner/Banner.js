import React, { forwardRef } from 'react';

import * as Style from './style.js'

const Banner = forwardRef((props, ref) => {
    return (
        <Style.Banner ref={ref}>
            <Style.Content>
                <h2>안녕하세요 끊임없이 노력하는</h2>
                <h3>신입 프론트엔드 개발자 권정우입니다</h3>
                <p>제 사이트에 방문해주셔서 감사합니다</p>
            </Style.Content>
        </Style.Banner>
    );
});

export default Banner;