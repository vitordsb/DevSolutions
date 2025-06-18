import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./ui/pages/home/Home.jsx";
import Services from "./ui/pages/services/Services.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import SideBar from "/src/ui/components/SideBar/SideBar.jsx";
import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import ServiceDevelopment from "./ui/pages/services/MoreService/ServiceDevelopment";
import Aboutus from "./ui/pages/aboutus/Aboutus.jsx";
import Experience from "./ui/pages/experience/Experience.jsx";
import Consulting from "./ui/pages/consulting/Consulting.jsx";
import ServiceUI from "./ui/pages/services/MoreService/ServiceUI";
import NotFound from "./NotFound.jsx";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Content = styled.main`
  flex: 1;
  background-color: var(--bg-color);
  overflow-x: hidden;
`;

const pageTransition = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
  transition: { duration: 0.2 },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        transition={pageTransition.transition}
        style={{ height: "100%" }}
      >
        <Routes location={location}>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/service/development" element={<ServiceDevelopment />} />
          <Route path="/service/designer" element={<ServiceUI />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <AppContainer>
            <SideBar />
            <Content>
              <AnimatedRoutes />
            </Content>
          </AppContainer>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}
