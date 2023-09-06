import logo from "./logo.svg";
import { CreatePage, ExistPage, StartPage, RoomPage } from "./pages";
import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
function App() {
    const [username, setUsername] = useState("");

    return (
        <Router>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/room/create" element={<CreatePage />} />
                <Route path="/room/:id" element={<RoomPage />} />
                <Route path="/room/exist" element={<ExistPage />} />
            </Routes>
        </Router>
    );
}

export default App;
