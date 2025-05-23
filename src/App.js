import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Landing from "./pages/landing/landing.tsx";
import ProjectDetail from './pages/project/projectDetail.tsx';
import { BackButtonProvider, useBackButton } from "./BackButtonContext.js";

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])
  return null
}

// Function to set the real viewport height
const setRealViewportHeight = () => {
  const vh = window.innerHeight * 0.01; // 1% of the viewport height
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

// Set the viewport height on load and resize
setRealViewportHeight();
window.addEventListener('resize', setRealViewportHeight);


function App() {
  return (
    <>
      <BackButtonProvider> {/* Wrap the entire app */}
      <div id="scroll-container">
      <Router>
        <ScrollToTop /> 
        <BackButtonTracker /> 
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/project/:projectName' element={<ProjectDetail />} />
        </Routes>
      </Router>
      </div>
      </BackButtonProvider>
    </>
  );
}

function BackButtonTracker() {
  const location = useLocation();
  const { setIsBackButtonPressed } = useBackButton();
  const prevPathRef = useRef(null);

  useEffect(() => {
    if (prevPathRef.current && prevPathRef.current !== "/" && location.pathname === "/") {
      // console.log("✅ Back button detected, returning to /");
      setIsBackButtonPressed(true); // Set back button flag
    } else {
      setIsBackButtonPressed(false); // Reset if normal navigation
    }

    prevPathRef.current = location.pathname;
  }, [location, setIsBackButtonPressed]);

  return null; // This component does not render anything
}

export default App;
