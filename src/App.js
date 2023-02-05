import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import React, { useEffect } from "react";

function App() {
    useEffect(() => {
        document.title = "Mearly";
        const link = document.querySelector("link[rel*='icon']") || document.createElement("link");
        link.type = "image/x-icon";
        link.rel = "shortcut icon";
        link.href = require("./Image.png");
        document.getElementsByTagName("head")[0].appendChild(link);
    }, []);
    return (
        <div className="App">
            <Home />
        </div>
    );
}

export default App;
