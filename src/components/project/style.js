import styled from "styled-components";

export const Project = styled.div`
    padding: 100px 0px;
    h2{
        font-size: 40px;
        text-align: center;
        color: #000;
        text-shadow: 3px 3px 3px #00000055;
    }
    ul{
        display: flex;
        flex-direction: column;
        gap: 50px;
        margin-top: 50px;
        li{
            display: grid;
            grid-template-columns: 500px 1fr;
            gap: 30px;
            img{
                width: 500px;
                height: 500px;
                box-shadow: 2px 2px 2px #00000044;
                border-radius: 15px;
            }
            .content{
                h3{
                    font-size: 24px;
                }
                div{
                    margin-top: 20px;
                    h4{
                        font-size: 20px;
                    }
                    p{
                        font-size: 18px;
                        font-family: 'Pretendard-Regular';
                        color: #444;
                        margin-top: 5px;
                        line-height: 1.2;
                    }
                    a{
                        font-size: 18px;
                    }
                }
            }
        }
    }
    @media (max-width:850px) {
        ul{
            li{
                text-align: center;
                grid-template-columns: 1fr;
                img{
                    margin: 0 auto;
                }
            }
        }
    }
    @media (max-width:500px) {
        ul{
            li{
                img{
                    width: 400px;
                    height: 400px;
                }
            }
        }
    }
    @media (max-width:450px) {
        h2{
            font-size: 30px;
        }
        ul{
            li{
                .content{
                    h3{
                        font-size: 22px;
                    }
                    div{
                        h4{
                            font-size: 18px;
                        }
                        p{
                            font-size: 14px;
                            line-height: 1.5;
                        }
                    }
                }
            }
        }
    }
    @media (max-width:400px) {
        ul{
            li{
                img{
                    width: 280px;
                    height: 280px;
                }
            }
        }
    }
`