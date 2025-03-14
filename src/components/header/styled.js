import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100px;
        padding: 15px;
        display: flex;
        justify-content: center;
        background-color: rgba(0, 0, 0, 1);
        color: rgba(255, 255, 255, 1);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
    `,
    Main: styled.div`
        /* border: 1px solid #f00; */
        width: 100%;
        max-width: 1440px;

        display: flex;
        align-items: center;
        justify-content: space-between;
    `,
    Sitename: styled(NavLink)`
        text-decoration: none;
        color: #fff;
        font-family: "Oswald", sans-serif;
    `,
    DateTime: styled.div`
        /* border: 1px solid #f00; */
        text-align: right;
        font-family: Consolas;
    `,
};
