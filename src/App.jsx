import React from "react";
import styled from "styled-components";
import Header from "./components/header";
import Footer from "./components/footer";
import AppRoutes from "./AppRoutes";

const App = () => {
    return (
        <>
            <Header />
            <Styled.RoutesWrapper>
                <AppRoutes />
            </Styled.RoutesWrapper>
            <Footer />
        </>
    );
};

export default App;

const Styled = {
    RoutesWrapper: styled.div`
        border: 1px solid #f00;
        min-height: 100vh;
    `,
};
