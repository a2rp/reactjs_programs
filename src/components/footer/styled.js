import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100px;
        /* min-height: 300px; */
        background-color: #000;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    Main: styled.div`
        padding: 15px;
        width: 100%;
        max-width: 1440px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        color: rgba(255, 255, 255, 0.7);
        gap: 15px;
        font-family: "Oswald", sans-serif;
    `,
    Copyright: styled.div`
        /* text-align: left; */
    `,
    Development: styled.div`
        /* text-align: right; */

        a {
            color: #fff;
            text-decoration: none;
        }
    `,
};
