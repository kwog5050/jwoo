import React, { forwardRef } from 'react';

import * as Stlye from './style.js'

const About = forwardRef((props, ref) => {
    return (
        <div className="wrap">
            <Stlye.About ref={ref}>
                <h2>ABOUT</h2>
                <ul>
                    {/* <li><img src="" alt="" /></li> */}
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
                            <h4>010-7181-3987</h4>
                        </span>
                        <span>
                            <h3>이메일</h3>
                            <h4>kwog5050@gmail.com</h4>
                        </span>
                    </li>
                </ul>

                <p>
                    저는 퍼블리셔로 2년간 다양한 프로젝트에 참여하면서 웹 기술과 레이아웃에 대한 경험을 쌓았습니다.  <br />
                    현재는 프론트엔드 개발에 흥미를 느끼고, 공부하며 전환하고자 합니다. <br />
                    디자인에 대한 전문 지식은 없지만, 기술적인 역량과 문제 해결 능력을 바탕으로 레이아웃 및 사용자 경험을 개선하는 <br />
                    프론트엔드 개발자로 성장하고자 합니다.
                </p>
            </Stlye.About>
        </div>
    );
});

export default About;