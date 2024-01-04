import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
const firebaseConfig = {
    apiKey: "AIzaSyDJ6NUqVDMW0AZBqm1UAZQu8ZNY-0ob_BA",
    authDomain: "mreshank-personal-portfolio-gh.firebaseapp.com",
    databaseURL: "https://mreshank-personal-portfolio-gh-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "mreshank-personal-portfolio-gh",
    storageBucket: "mreshank-personal-portfolio-gh.appspot.com",
    messagingSenderId: "996854783104",
    appId: "1:996854783104:web:6ec6622ed0bf81da361a65",
    measurementId: "G-VMH1P167K8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getDatabase, ref, get, set, child, update, remove } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const db = getDatabase();

var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var subjectInput = document.getElementById("subjectInput");
var messageInput = document.getElementById("messageInput");

function submitContactForm(){ 
    console.log("submitContactForm function called");

    let timestamp = Date.now().toString();

    set (ref(db, "contactForm/" + timestamp), {
        Name: nameInput.value,
        Email: emailInput.value,
        Subject: subjectInput.value,
        Message: messageInput.value,
    })

    .then(() =>{
        console.log("Data stored successfully.");
        formSubmitted();
    })
    .catch((error) => {
        alert("Error in saving data" + error);
    });
    return false;
}

document.getElementById("contactNow").addEventListener('click', submitContactForm);

function formSubmitted() {
    console.log("Form Submitted Successfully !");
}