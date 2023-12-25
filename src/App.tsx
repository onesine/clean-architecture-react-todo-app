import { Route, Routes } from "react-router";

import PAGE from "./constants/page.ts";
import Home from "./pages/Home.tsx";

const App = () => {
    return (
        <Routes>
            <Route path={PAGE.HOME} element={<Home />} />
        </Routes>
    );
};

export default App;
