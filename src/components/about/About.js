import React from 'react';

import * as Stlye from './style.js'

const About = () => {
    return (
        <div className="wrap">
            <Stlye.About>
                <h2>ABOUT</h2>
                <ul>
                    <li><img src="" alt="" /></li>
                    <li>
                        <span>
                            <h3>이름</h3>
                            <h4>권정우</h4>
                        </span>
                        <span>
                            <h3>생년월일</h3>
                            <h4>97.08.22</h4>
                        </span>
                        <span>
                            <h3>연락처</h3>
                            <h4>010-0000-0000</h4>
                        </span>
                        <span>
                            <h3>이메일</h3>
                            <h4>kwog5050@gmail.com</h4>
                        </span>
                    </li>
                </ul>

                <p>
                    대충 소개글 대충 소개글 대충 소개글 대충 소개글 <br />
                    대충 소개글 대충 소개글 대충 소개글 대충 소개글 <br />
                    대충 소개글 대충 소개글 대충 소개글 대충 소개글
                </p>
            </Stlye.About>
        </div>
    );
};

export default About;