import React, { useState } from "react";
import { Styled } from "./styled";

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <Styled.Copyright>
                    &copy; {currentYear}. All Rights Reserved
                </Styled.Copyright>
                <Styled.Development>
                    Developed by{" "}
                    {/* <a href="https://www.ashishranjan.net" target="_blank"> */}
                    Ashish Ranjan
                    {/* </a> */}. Made in ReactJS.
                </Styled.Development>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default Footer;
