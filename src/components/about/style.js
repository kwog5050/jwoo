import styled from "styled-components";

export const About = styled.div`
    padding: 100px 0px;
    h2{
        text-align: center;
        font-size: 40px;
        text-shadow: 3px 3px 3px #00000055;
    }
    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        margin-top: 50px;
        li{
            /* display: flex;
            flex-direction: column;
            gap: 15px; */
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 15px;
            img{
                width: 300px;
                height: 370px;
                background-color: #eee;
            }
            span{
                display: block;
                background-color: #fff;
                box-shadow: 2px 2px 5px #00000066;
                padding: 15px 15px;
                border-radius: 15px;
                h3{
                    font-size: 22px;
                    line-height: 1.2;
                }
                h4{
                    color: #666;
                    font-size: 20px;
                    font-family: 'Pretendard-Regular';
                    line-height: 1.2;
                }
            }
        }
    }
    > p{
        margin-top: 50px;
        font-size: 18px;
        font-family: 'Pretendard-Regular';
        text-align: center;
        line-height: 1.5;
    }
    @media (max-width:600px) {
        ul{
            li{
                grid-template-columns: 1fr;
                span{
                    width: 300px;
                }
            }
        }
        > p{
            br{
                display: none;
            }
        }
    }
    @media (max-width:450px) {
        h2{
            font-size: 30px;
        }
        > p{
            font-size: 14px;
        }
    }
`