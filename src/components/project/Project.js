import React from 'react';

import * as Style from './style.js';

const Project = () => {
    return (
        <Style.Project>
            <div className="wrap">
                <h2>PROJECT</h2>
                <ul>
                    <li>
                        <img src="" alt="" />
                        <div className="content">
                            <h3>JWOO PORTFOLIO</h3>
                            <div>
                                <p>
                                    style을 관리하기 용이하게 styled-components를 사용했으며 <br />
                                    pc, mobile 고려해 반응형으로 제작했습니다
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
                                <p><a href="">PORTFOLIO</a></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="" alt="" />
                        <div className="content">
                            <h3>프로젝트명자리</h3>
                            <h4>사용기술</h4>
                            <h4>사용기술</h4>
                            <h4>사용기술</h4>
                        </div>
                    </li>
                </ul>
            </div>
        </Style.Project>
    );
};

export default Project;