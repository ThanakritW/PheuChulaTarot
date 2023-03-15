import { BrowserRouter, Routes, Route, useLocation, Router } from "react-router-dom";
import Game from "../pages/Home";
import { AnimatePresence } from "framer-motion";

const MyRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Game />} />
            </Routes>
        </AnimatePresence>
    );
};

export default MyRoutes;