import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAL228FllKdBqDb-UAMdQbExrQFjXAaqVk",
  authDomain: "evernotejan03.firebaseapp.com",
  databaseURL: "https://evernotejan03.firebaseio.com",
  projectId: "evernotejan03",
  storageBucket: "evernotejan03.appspot.com",
  messagingSenderId: "701731127663",
  appId: "1:701731127663:web:41dda1d26a708d0cf2a89a"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("evernote-container"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
