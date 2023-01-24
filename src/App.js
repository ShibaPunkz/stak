import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AppHeader from "./component/header";
import AppFooter from "./component/footer";
import Topbar from "./component/topbar";
import DashBoard from "./pages/dashboard";
import Staking from "./pages/staking";
import Unstaking from "./pages/unstaking";

import { motion } from "framer-motion";
import { ClassicSpinner } from "react-spinners-kit";

import "./App.css";
function App() {
  const [preloadState, setPreloadState] = useState(true);

  setInterval(() => {
    setPreloadState(false);
  }, 3000);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}>
      <div className="main-section">
        {preloadState && (
          <div className="metaverse_fn_preloader">
            <ClassicSpinner size={40} />
          </div>
        )}
        <Router>
          <AppHeader />
          <Topbar />
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/unstake" element={<Unstaking />} />
          </Routes>
          <AppFooter />
        </Router>
      </div>
    </motion.section>
  );
}

export default App;