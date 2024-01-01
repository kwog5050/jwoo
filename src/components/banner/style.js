import styled from "styled-components";
import bannerImage from 'assets/images/banner.jpg';

export const Banner = styled.div`
    width: 100%;
    height: 600px;
    background-image: url(${bannerImage});
    background-size: cover;    
    background-position: 50%;
    background-repeat: no-repeat;
    position: relative;
    &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #49000030;
    }
`

export const Content = styled.div`
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    text-align: center;
    color: #fff;
    line-height: 1.2;
    font-size: 34px;
    z-index: 1;
    P{
        font-size: 16px;
        margin-top: 30px;
        font-family: 'Pretendard-Regular';
    }
    @media (max-width:1000px) {
        font-size: 24px;
    }
    @media (max-width:450px) {
        font-size: 20px;
    }
`