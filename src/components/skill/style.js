import styled from "styled-components";
import skillImage from 'assets/images/skill.jpg'

export const Skill = styled.div`
    padding: 100px 0px;
    position: relative;
    .wrap{
        width: 700px;
    }
    &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${skillImage});
        background-position: center;
        background-attachment: fixed;
        background-size: cover;
        z-index: -2;
    }
    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #00000099;
        z-index: -1;
    }
    h2{
        font-size: 40px;
        text-align: center;
        text-shadow: 3px 3px 3px #aaaaaa55;
        color: #fff;
    }
    ul{
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        li{
            display: flex;
            align-items: center;
            background-color: #ffffff;
            gap: 15px;
            border-radius: 15px;
            padding: 15px;
            position: relative;
            transition: all .5s;
            cursor: pointer;
            i{
                font-size: 80px;
            }
            p{
                font-size: 18px;
                font-family: 'Pretendard-Regular';
                line-height: 1.2;
            }
            &:hover{
                transform: translate(-10px, -10px);
            }
        }
    }
`
export const Html = styled.i`
    color: #e54d26;
`
export const Css = styled.i`
    color: #0b74b7;
`
export const Js = styled.i`
    color: #d9b82b;
`
export const React = styled.i`
    color: #00dbff;
`
export const Node = styled.i`
    color: #75ba5d;
`