import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./css/reset.css";
import "./css/general.css"

import Init from "./Init";
import FirstPage from "./FirstPage";

export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Init />} />
                <Route path="/firstpage" element={<FirstPage />} />
            </Routes>
        </BrowserRouter>
    );
}
