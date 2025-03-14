import React, { lazy, Suspense, useEffect, useRef } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "lenis/dist/lenis.css";
import { AnimatePresence } from "framer-motion";
import { Box, CircularProgress } from "@mui/material";
import Lenis from "lenis";

const Home = lazy(() => import("./pages/home"));
const NotFound = lazy(() => import("./pages/notFound"));

const Loader = () => (
    <Box
        sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
        }}
    >
        <CircularProgress />
    </Box>
);

const AppRoutes = () => {
    const { pathname } = useLocation();
    const lenisRef = useRef(null); // Ref to store Lenis instance

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        // gsap.registerPlugin(ScrollTrigger);

        // Initialize Lenis for smooth scrolling
        const lenis = new Lenis({
            smooth: true,
            smoothWheel: true,
            duration: 1.2,
            ease: (t) => 1 - Math.pow(1 - t, 3),
        });
        lenisRef.current = lenis; // Store Lenis instance in ref

        // RAF loop for Lenis
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Sync Lenis with ScrollTrigger
        // lenis.on("scroll", ScrollTrigger.update);
        // gsap.ticker.add((time) => lenis.raf(time * 100));

        // Handle arrow keys for smooth scrolling
        const handleKeyDown = (event) => {
            if (event.key === "ArrowDown") {
                lenis.scrollTo(window.scrollY + 100, { immediate: false });
            } else if (event.key === "ArrowUp") {
                lenis.scrollTo(window.scrollY - 100, { immediate: false });
            }
        };
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            // gsap.ticker.remove((time) => lenis.raf(time * 1000));
            lenis.destroy();
            window.removeEventListener("keydown", handleKeyDown);
            // document.removeEventListener("mousedown", handleMouseDown);
        };
    }, []);

    return (
        <AnimatePresence mode="wait">
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Navigate to="/" />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </AnimatePresence>
    );
};

export default AppRoutes;
