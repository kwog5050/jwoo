import styled from "styled-components";

export const Project = styled.div`
    padding: 100px 0px;
    h2{
        font-size: 40px;
        text-align: center;
        color: #000;
    }
    ul{
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin-top: 30px;
        li{
            display: grid;
            grid-template-columns: 500px 1fr;
            gap: 30px;
            img{
                width: 500px;
                height: 500px;
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
                    }
                    a{
                        font-size: 18px;
                    }
                }
            }
        }
    }
`