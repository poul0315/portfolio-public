import "./landing.css";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import About from "../about/about.tsx";
import Header from "../../components/header/header.tsx";
import Experience from "../experience/experience.tsx";
import Project from "../project/project.tsx";
import Footer from "../../components/footer/footer.tsx";
import { useBackButton } from "../../BackButtonContext.js";


export default function Landing() {
    const navigate = useNavigate();
    const location = useLocation();
    const [showLanding, setShowLanding] = useState(false);
    const [overlayPhase, setOverlayPhase] = useState(""); // 'idle', 'running', 'complete'
    const hasVisitedRef = useRef(false); // Track if the user has already visited
    const { isBackButtonPressed, setIsBackButtonPressed } = useBackButton(); // Get back button state


    useEffect(() => {
      let shouldShowLanding = false;

      const fromState = location.state?.fromRefresh;

      if (isBackButtonPressed) {
          // Case 1: Back button initiated
          shouldShowLanding = false;
      } else if (!hasVisitedRef.current) {
          // Case 2: Page was refreshed (without back navigation) — show landing page
          shouldShowLanding = true;
      } else {
          // Default case: Don't show the landing page
          shouldShowLanding = false;
      }

      if (shouldShowLanding) {
          setShowLanding(true);
          const timer = setTimeout(() => {
                  setOverlayPhase("running");
                  setTimeout(() => {
                  setOverlayPhase("complete");
                  setShowLanding(false);
              }, 900);
          }, 2500);

          return () => clearTimeout(timer);
      } else {
          setShowLanding(false);
      }

      if (fromState !== undefined) {
          navigate(location.pathname, { replace: true, state: undefined });
      }

      hasVisitedRef.current = true;
    }, [location.pathname, location.state, navigate, isBackButtonPressed, setIsBackButtonPressed]);

    return (
      <div className="flex flex-col relative w-full h-full">

        {/* Landing Page */}
        {showLanding && (
          <motion.div className="h-screen flex flex-col overflow-hidden">
            
            {/* White Upper Section */}
            <div className="flex-1 bg-white flex items-center justify-center relative text-9xl">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-full bg-black z-0"
              />
              <div className="flex justify-start sm:w-[100%] md:w-[50%] relative z-10">
                <p className="w-full text-white text-[3rem] sm:text-[8rem]">HELLO, I'M</p>
              </div>
            </div>
  
            {/* Black Lower Section */}
            <div className="flex-1 bg-black flex items-center justify-center relative text-9xl">
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 left-0 w-full h-full bg-white z-0"
              />
              <div className="flex flex-col justify-end sm:w-[100%] md:w-[50%] relative z-10 space-y-[3rem]">
                <p className="flex justify-end w-full text-black text-[4rem] sm:text-[9rem]">PAUL NAM</p>
              </div>
            </div>
          </motion.div>
        )}
  
        {/* Continuous Transition Overlay */}
        {(overlayPhase === "running" || overlayPhase === "complete") && (
          <motion.div
            initial={{ y: "100%" }}
            animate={overlayPhase === "complete" ? { y: "-100%" } : { y: "0%" }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-full bg-gray-500 z-50"
          />
        )}
  
        {/* Welcome Section */}
        {!showLanding && (
          <>
            <section
              id="header"
              className="relative flex flex-row sticky w-full h-[5rem] bg-black top-0 z-40 items-center 2xl:overflow-hidden"
            >
              <Header />
            </section>
  
            <section
              id="welcome"
              className="h-auto w-full bg-white text-black flex flex-col items-center justify-center py-[8rem]"
            >
              <About />
            </section>
  
            <section
              id="experience"
              className="h-auto w-full bg-black text-white flex flex-col items-center justify-center py-[8rem]"
            >
              <Experience />
            </section>
  
            <section
              id="project"
              className="h-auto w-full bg-white text-black flex flex-col items-center justify-center py-[8rem]"
            >
              <Project />
            </section>
  
            <section
              id="footer"
              className="h-[3rem] w-full bg-black text-black flex flex-row items-center justify-center py-[2rem]"
            >
              <Footer />
            </section>
          </>
        )}
      </div>
    );
};