import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./ui/pages/home/Home.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import SideBar from "./components/SideBar/SideBar.jsx";
import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Content = styled.main`
  flex: 1;
  background-color: var(--bg-color);
  overflow-y: hidden;
`;

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
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
          <Route path="/" element={<Home />} />
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
