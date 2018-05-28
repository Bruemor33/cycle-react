import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navigation from "../public/views/partials/navbar.js";

const Home = () => {
    return (
        <Navigation />
    )
}

ReactDOM.render(<Home />, document.getElementById('index'));

console.log("hello world");

import '../src/index.scss';


