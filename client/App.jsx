import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Test from './pages/Test.jsx';
import UsSenators from "./pages/usSenators.jsx";
import UsReps from "./pages/usReps.jsx";
import Results from "./pages/Results.jsx";
import StateSenate from "./pages/stateSenate.jsx"
import StateReps from "./pages/stateReps.jsx"
import StateReps2 from "./pages/stateReps2.jsx"
import StateReps3 from "./pages/stateReps3.jsx"
import Governor from "./pages/Governor.jsx"
// import Navbar from "./components/Navbar.jsx";

const App = () => {
    return (
        <BrowserRouter>
        {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<Test />} />
                <Route path="/UsSenators" element={<UsSenators />} />
                <Route path="/UsReps" element={<UsReps />} />
                <Route path="/Results" element={<Results />} />
                <Route path="/StateSenate" element={<StateSenate />} />
                <Route path="/StateReps" element={<StateReps />} />
                <Route path="/StateReps2" element={<StateReps2 />} />
                <Route path="/StateReps3" element={<StateReps3 />} />
                <Route path="/Governor" element={<Governor />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;