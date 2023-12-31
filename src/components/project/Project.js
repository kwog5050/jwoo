import React, { forwardRef } from 'react';

import * as Style from './style.js';

import portfolioImage01 from 'assets/images/portfolio01.jpg'

const Project = forwardRef((props, ref) => {
    return (
        <Style.Project ref={ref}>
            <div className="wrap">
                <h2>PROJECT</h2>
                <ul>
                    <li>
                        <img src={portfolioImage01} alt="" />
                        <div className="content">
                            <h3>JWOO PORTFOLIO</h3>
                            <div>
                                <p>
                                    프론트엔드로 취업하기 위해 제작된 포트폴리오입니다
                                </p>
                            </div>
                            <div>
                                <h4>사용기술</h4>
                                <p>react, styled-components</p>
                            </div>
                            <div>
                                <h4>개발인원</h4>
                                <p>1명</p>
                            </div>
                            <div>
                                <h4>사이트 URL</h4>
                                <p><a href="">PORTFOLIO</a></p>
                            </div>
                            <div>
                                <h4>Git Hub URL</h4>
                                <p><a href="">Git Hub</a></p>
                            </div>
                        </div>
                    </li>
                    {/* <li>
                        <img src="" alt="" />
                        <div className="content">
                            <h3>프로젝트명자리</h3>
                            <h4>사용기술</h4>
                            <h4>사용기술</h4>
                            <h4>사용기술</h4>
                        </div>
                    </li> */}
                </ul>
            </div>
        </Style.Project>
    );
});

export default Project;