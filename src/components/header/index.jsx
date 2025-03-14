import React, { useState, useEffect } from "react";
import { Styled } from "./styled";

const Header = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const updateDateTime = () => {
            setDateTime(new Date());
            setTimeout(updateDateTime, 1000); // Har second update karega
        };

        updateDateTime(); // Initial call

        return () => clearTimeout(updateDateTime); // Cleanup on unmount
    }, []);

    // Date ko "Aug 14, 2025" format mein convert karna
    const formattedDate = dateTime.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
    });

    // Time ko "HH:mm:SS" format mein convert karna
    const formattedTime = dateTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false, // 24-hour format ke liye
    });

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <Styled.Sitename>a2rp: ReactJS Concepts</Styled.Sitename>
                <Styled.DateTime>{`${formattedDate} ${formattedTime}`}</Styled.DateTime>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default Header;
