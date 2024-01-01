import React, { forwardRef } from 'react';

import * as Style from './style.js';

import portfolioImage01 from 'assets/images/portfolio01.jpg'
import portfolioImage02 from 'assets/images/portfolio02.jpg'
import portfolioImage03 from 'assets/images/portfolio03.jpg'

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
                                <h4>사용 기술</h4>
                                <p>react, styled-components</p>
                            </div>
                            <div>
                                <h4>개발 인원</h4>
                                <p>1명</p>
                            </div>
                            <div>
                                <h4>제작 기간</h4>
                                <p>2일</p>
                            </div>
                            <div>
                                <h4>사이트 URL</h4>
                                <p><a href="">PORTFOLIO</a></p>
                            </div>
                            <div>
                                <h4>Git Hub URL</h4>
                                <p><a href="https://github.com/kwog5050/jwoo" target='_blank'>Git Hub</a></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src={portfolioImage02} alt="" />
                        <div className="content">
                            <h3>lifehim 쇼핑몰</h3>
                            <div>
                                <p>
                                    react로 쇼핑몰을 제작했으나 react를 익힌지 얼마안되서 통신후 재랜더링 부분을
                                    강제로 새로고침 시켜서 아쉬움
                                    그리고 실시간 채팅부분에서 useEffect로 계속 갱신을해서 받아오는데 이 부분에서
                                    계속 요청이 누적되서 사이트가 느려지는걸 확인 다음 부터는 강제로 새로고침을 시키는걸 신경써서 작업하고 채팅은 웹소켓을 사용해야겠다고 생각하게됨
                                </p>
                            </div>
                            <div>
                                <h4>사용 기술</h4>
                                <p>react, styled-components, php, axios, ckeditor, nivo</p>
                            </div>
                            <div>
                                <h4>개발 인원</h4>
                                <p>frontend 1명, backend 2명</p>
                            </div>
                            <div>
                                <h4>담당 업무</h4>
                                <p>
                                    frontend 90% <br />
                                    메인페이지, 어드민 대시보드페이지, 결제페이지, 마이페이지, 상품페이지, 게시판페이지등 제작
                                </p>
                            </div>
                            <div>
                                <h4>제작 기간</h4>
                                <p>4개월</p>
                            </div>
                            <div>
                                <h4>사이트 URL</h4>
                                <p><a href="https://lifehim.com/" target='_blank'>PORTFOLIO</a></p>
                            </div>
                            <div>
                                <h4>Git Hub URL</h4>
                                <p><a href="https://github.com/koreaCoren/shop-frontend" target='_blank'>Git Hub</a></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src={portfolioImage03} alt="" />
                        <div className="content">
                            <h3>목화식품 소개사이트</h3>
                            <div>
                                <p>
                                    처음으로 typescript, redux-toolkit을 적용해본 사이트
                                    아직 인터페이스 정도만 사용해봤는데 의외로 불편했으나
                                    에러나면 바로 알 수 있어서 이 부분은 괜찮았던거 같음
                                    그리고 redux-toolkit으로 간단하게 로그인 부분에만 적용시켜봤는데 store에서 변수를 한번에 관리해줘서 규모가 조금 큰 사이트면 props로 넘겨주는것 보다 redux-toolkit를 활용하는게 좋은거같음
                                </p>
                            </div>
                            <div>
                                <h4>사용 기술</h4>
                                <p>react, styled-components, java, spring boot, axios, ckeditor, typescript, redux-toolkit</p>
                            </div>
                            <div>
                                <h4>개발 인원</h4>
                                <p>frontend 1명, backend 1명</p>
                            </div>
                            <div>
                                <h4>담당 업무</h4>
                                <p>
                                    frontend 100% <br />
                                    메인페이지, 게시판페이지, 로그인
                                </p>
                            </div>
                            <div>
                                <h4>제작 기간</h4>
                                <p>15일</p>
                            </div>
                            <div>
                                <h4>사이트 URL</h4>
                                <p><a href="http://oufnb.com/" target='_blank'>PORTFOLIO</a></p>
                            </div>
                            <div>
                                <h4>Git Hub URL</h4>
                                <p><a href="https://github.com/koreaCoren/moghwa" target='_blank'>Git Hub</a></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </Style.Project>
    );
});

export default Project;