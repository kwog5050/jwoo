import React, { forwardRef } from 'react';

import * as Style from './style.js';

const Skill = forwardRef((props, ref) => {
    return (
        <Style.Skill ref={ref}>
            <div className="wrap">
                <h2>SKILLS</h2>

                <ul>
                    <li>
                        <Style.Html className="fa-brands fa-html5"></Style.Html>
                        <p>
                            크로스 브라우징에 대응 <br />
                            웹 접근성, 웹 표준을 준수
                        </p>
                    </li>
                    <li>
                        <Style.Css className="fa-brands fa-css3-alt"></Style.Css>
                        <p>
                            pc, mobile을 신경쓰면서 반응형으로 구현 <br />
                            scss를 사용해 변수 및 반복문 활용
                        </p>
                    </li>
                    <li>
                        <Style.Js className="fa-brands fa-js"></Style.Js>
                        <p>
                            웹페이지를 동적 제작 <br />
                            json형태를 가지고 있는 데이터 가공 및 활용
                        </p>
                    </li>
                    <li>
                        <Style.React className="fa-brands fa-react"></Style.React>
                        <p>
                            컴포넌트를 활용해 코드 재사용 <br />
                            style-components를 사용하여 스타일링을 좀 더 관리에 용이하게 작업 <br />
                            axios를 사용해 backend와 통신 <br />
                            useEffect를 사용해 재랜더링없이 데이터 변환 <br />
                            redux-toolki을 활용해 데이터 전역관리
                        </p>
                    </li>
                    {/* <li>
                            <Style.Node className="fa-brands fa-node"></Style.Node>
                            <p>

                            </p>
                        </li> */}
                </ul>
            </div>
        </Style.Skill>
    );
});

export default Skill;