import styled from "styled-components";

export const Header = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 5;
    background-color: #fff;
    box-shadow: 2px 2px 2px #00000044;
    padding: 15px 0px;
    a{
        color: #000;
        text-decoration: none;
        font-family: 'OKDDUNG';
        font-size: 30px;
    }
    ul.pc{
        li{
            padding: 10px 15px;
            margin: 5px;
            cursor: pointer;
            font-size: 16px;
        }
    }
    .mobile{
        i{
            font-size: 24px;
            padding: 10px;
            cursor: pointer;
        }
        ul{
            position: fixed;
            top: 0;
            left: 0;
            width: 250px;
            height: 100vh;
            max-width: 0px;
            overflow: hidden;
            white-space: nowrap;
            background-color: #fff;
            z-index: 10;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            transition: all .5s;
            li{
                width: 100%;
                text-align: center;
                font-size: 24px;
                line-height: 40px;
                padding-top: 5px;
                cursor: pointer;
                transition: background .5s;
                &:hover{
                    background-color: #ddd;
                }
            }
        }
        ul.on{
            max-width: 250px;
        }
        .bg{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #00000066;
            z-index: 9;
            display: none;
        }
        .bg.on{
            display: block;
        }
    }
`