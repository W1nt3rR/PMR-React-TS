import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { Magisk } from "../Magisk";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/magisk" element={<Magisk />} />
                <Route path="*" element={<p>404</p>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;