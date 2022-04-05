import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Test from './pages/Test.jsx';
import Results from './pages/Results.jsx'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<Test />} />
                <Route path="/results" element={<Results />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;