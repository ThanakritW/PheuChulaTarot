import { BrowserRouter, Routes, Route } from "react-router-dom";
import Soon from "../pages/Soon";
import Test from "../pages/Test";

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Soon />} />
                <Route path="/test" element={<Test />} />
            </Routes>
        </BrowserRouter >
    );
};

export default MyRoutes;