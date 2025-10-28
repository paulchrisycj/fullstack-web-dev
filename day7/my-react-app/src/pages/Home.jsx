import { useState } from "react";
import Navbar from "../components/Navbar";

function Home() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <>
            <Navbar />
            <div>
                <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <p>Name: {name}</p>
                <p>Email: {email}</p>
            </div>
        </>
    );
}

export default Home;
