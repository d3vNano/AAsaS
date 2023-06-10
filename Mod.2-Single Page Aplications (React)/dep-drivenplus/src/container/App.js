import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "../components/contexts/UserContext.js";
import { useState } from "react";

import ResetStyle from "../assets/css/ResetStyle.js";
import GlobalStyle from "../assets/css/GlobalStyle.js";

import InitialScreen from "../components/screens/InitialScreen.js";
import SubsScreen from "../components/screens/SubsScreen.js";
import AllPlansScreen from "../components/screens/AllPlansScreen.js";
import PlanScreen from "../components/screens/PlanScreen.js";
import HomeScreen from "../components/screens/HomeScreen.js";


function App() {

    const [loggedUser, setLoggedUser] = useState(JSON.parse(window.localStorage.getItem("user")) || {});
    const [allplans, setAllPlans] = useState([]);
    const [plan, setPlan] = useState({});
    const [conf, setConf] = useState();

    function setPlans(key, value) {
        setPlan(prev => ({
            ...prev,
            [key]: value
        }))
    }

    return (
        <UserContext.Provider value={{ loggedUser, setLoggedUser, allplans, setAllPlans, plan, setPlan, conf, setConf, setPlans }}>
            <ResetStyle />
            <GlobalStyle />
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<InitialScreen />} />
                    <Route path="/sign-up" element={<SubsScreen />} />
                    <Route path="/subscriptions" element={<AllPlansScreen />} />
                    <Route path="/subscriptions/:idPlans" element={<PlanScreen />} />
                    <Route path="/home" element={<HomeScreen />} />

                </Routes>

            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App;