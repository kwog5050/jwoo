import styled from "styled-components";

export const Contact = styled.div`
    padding-bottom: 50px;
    h2{
        text-align: center;
        font-size: 40px;
        text-shadow: 3px 3px 3px #00000055;
    }
    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 5px;
        margin-top: 30px;
        li{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            b{
                font-size: 24px;
            }
            span{
                font-size: 24px;
                font-family: 'Pretendard-Regular';
            }
        }
    }
    @media (max-width:450px) {
        h2{
            font-size: 30px;
        }
        ul{
            li{
                b{
                    font-size: 16px;
                }
                span{
                    font-size: 16px;
                }
            }
        }
    }
`