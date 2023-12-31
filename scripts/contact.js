import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
const firebaseConfig = {
    /* COPY PASTE YOUR YOUR FIREBASE CONFIGURATION DATA HERE */
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
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