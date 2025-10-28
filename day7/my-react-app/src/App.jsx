import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import User from './pages/User'
import Profile from "./pages/Profile";
import Welcome from "./pages/Welcome";
import FruitList from "./pages/FruitList";
import Todo from "./pages/Todo";


function App() {
    const [count, setCount] = useState(0);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/welcome" element={<Welcome isLoggedIn={true} />} />
            <Route path="/fruits" element={<FruitList />} />
            <Route path="/todos" element={<Todo />} />
        </Routes>
    );
}

export default App;
