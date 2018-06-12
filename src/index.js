import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navigation from "../public/views/partials/navbar.js";
import Welcome from "../public/views/home.js";

const Home = () => {
    return (
        <div>
            <Navigation />
            <Welcome />
        </div>
    )
}

ReactDOM.render(<Home />, document.getElementById('index'));

console.log("hello world");

import '../src/index.scss';


