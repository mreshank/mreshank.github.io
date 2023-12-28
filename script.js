function hello() {
    alert("Hello, World!");
}

let colorControlSwitch = 0

const body = document.body;
const navSection = document.getElementById("navigation-section");
const contactSection = document.getElementById("contact-section");

function handleColorSwitch() {

    alert(colorControlSwitch)

    if(colorControlSwitch == 0) {
        colorControlSwitch = 1
        body.style.color = "#000000";
        // document.body.style.backgroundColor = "#a2c0ed";
        body.style.backgroundColor = "#f8feff";
        document.getElementById("color-switch-button").style.backgroundImage = "url(./images/colorSwitch.b.png)";
        document.getElementById("intro-image").src = "./images/profile.c.png"
        document.getElementById("Instagram").src = "./images/instagram.c.png";
        document.getElementById("LinkedIn").src = "./images/linkedin.c.png";
        document.getElementById("GitHub").src = "./images/github.c.png";
        document.getElementById("YouTube").src = "./images/youtube.c.png";
        document.getElementById("WhatsApp").src = "./images/whatsapp.c.png";
        document.getElementById("LinkTree").src = "./images/linktree.c.png";
        document.getElementById("intro-image-and-text").style.backgroundImage = "url(./images/cover.bw02.png)";
        // document.getElementById("intro-text").style.color = "#f0f0f0";
        navSection.style.color = "#ffffff";
        navSection.nav.style.backgroundColor = "#000000";
        // document.getElementById("Instagram").src = "./images/instagram.c.png";
        // contactSection.div.form.div.div.input.style.backgroundColor = contactSection.div.form.input.style.backgroundColor = contactSection.div.form.div.textarea.style.backgroundColor = "#cfcfcf";
    } else {
        colorControlSwitch = 0
        document.body.style.color = "#ffffff";
        document.body.style.backgroundColor = "#1c1c1c";
        // document.getElementById("navigation-section").nav.backgroundColor = "#1414145e";
        document.getElementById("Instagram").src = "images/instagram.png";
        document.getElementById("Instagram").src = "instagram.png";
    }
}





  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBZPrM1iviwYerRrQrNVwwX5BLF_ZQBUII",
    authDomain: "mreshank-github-io-weather-app.firebaseapp.com",
    projectId: "mreshank-github-io-weather-app",
    storageBucket: "mreshank-github-io-weather-app.appspot.com",
    messagingSenderId: "647035684954",
    appId: "1:647035684954:web:19e174d643970bd665f063",
    measurementId: "G-KK1HTR9JDR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);




// const { url } = require("inspector");

// let colorControlSwitch = 0;

// const body = document.body;
// const navSection = document.getElementById("navigation-section");
// const contactSection = document.getElementById("contact-section");

// // Function to handle the color switch button click event
// function handleColorSwitch() {
//     console.log(colorControlSwitch);
//     if (colorControlSwitch == 0) {
//         body.style.color = "#000000";
//         // document.body.style.backgroundColor = "#a2c0ed";
//         body.style.backgroundColor = "#f8feff";
//         document.getElementById("color-switch-button").style.backgroundImage = "url(./images/colorSwitch.b.png)";
//         document.getElementById("intro-image").src = "./images/profile.c.png"
//         document.getElementById("Instagram").src = "./images/instagram.c.png";
//         document.getElementById("LinkedIn").src = "./images/linkedin.c.png";
//         document.getElementById("GitHub").src = "./images/github.c.png";
//         document.getElementById("YouTube").src = "./images/youtube.c.png";
//         document.getElementById("WhatsApp").src = "./images/whatsapp.c.png";
//         document.getElementById("LinkTree").src = "./images/linktree.c.png";
//         document.getElementById("intro-image-and-text").style.backgroundImage = "url(./images/cover.bw02.png)";
//         // document.getElementById("intro-text").style.color = "#f0f0f0";
//         navSection.style.color = "#ffffff";
//         navSection.nav.style.backgroundColor = "#000000";
//         // document.getElementById("Instagram").src = "./images/instagram.c.png";

//         // contactSection.div.form.div.div.input.style.backgroundColor = contactSection.div.form.input.style.backgroundColor = contactSection.div.form.div.textarea.style.backgroundColor = "#cfcfcf";
        
//         colorControlSwitch = 1;
//     } else {
//         document.body.style.color = "#ffffff";
//         document.body.style.backgroundColor = "#1c1c1c";
//         // document.getElementById("navigation-section").nav.backgroundColor = "#1414145e";
//         document.getElementById("Instagram").src = "images/instagram.png";
//         document.getElementById("Instagram").src = "instagram.png";
//         colorControlSwitch = 0;
//     }
// }

// // Get the color switch button element
// const colorSwitchButton = document.getElementById('color-switch-button');

// // Add event listener to the color switch button
// colorSwitchButton.addEventListener("click", handleColorSwitch);









// document.getElementById("intro-image-and-text").style.backgroundImage = "url(./images/github.png)";

// import { url } from "inspector";
// import "./styles.css";
// const mybut = document.getElementById("color-switch-button");
// mybut.addEventListener("click", function () {
//     body.color = rgb(0, 0, 0);
//     body.backgroundColor = rgb(215, 196, 255);
//     document.getElementById("navigation-section").nav.backgroundColor = rgba(9, 0, 33, 0.621);
//     document.getElementById("navigation-hyperlinks").a.color = rgba(211, 211, 211, 0.968);
//     document.getElementById("intro-image").content = url("images/profile.color.png");
//     document.getElementById("intro-image-and-text").backgroundImage = url("images/cover.color.jpg");
// } );

// function switchColorFunction() {
//     body.color = rgb(0, 0, 0);
//     body.backgroundColor = rgb(215, 196, 255);
//     document.getElementById("navigation-section").nav.backgroundColor = rgba(9, 0, 33, 0.621);
//     document.getElementById("navigation-hyperlinks").a.color = rgba(211, 211, 211, 0.968);
//     document.getElementById("intro-image").content = url("images/profile.color.png");
//     document.getElementById("intro-image-and-text").backgroundImage = url("images/cover.color.jpg");
// }






// function handleColorSwitch() {
//         console.log(colorControlSwitch);
//         if (colorControlSwitch == 0) {
//             body.style.color = "#000000";
//             // document.body.style.backgroundColor = "#a2c0ed";
//             body.style.backgroundColor = "#f8feff";
//             document.getElementById("color-switch-button").style.backgroundImage = "url(./images/colorSwitch.b.png)";
//             document.getElementById("intro-image").src = "./images/profile.c.png"
//             document.getElementById("Instagram").src = "./images/instagram.c.png";
//             document.getElementById("LinkedIn").src = "./images/linkedin.c.png";
//             document.getElementById("GitHub").src = "./images/github.c.png";
//             document.getElementById("YouTube").src = "./images/youtube.c.png";
//             document.getElementById("WhatsApp").src = "./images/whatsapp.c.png";
//             document.getElementById("LinkTree").src = "./images/linktree.c.png";
//             document.getElementById("intro-image-and-text").style.backgroundImage = "url(./images/cover.bw02.png)";
//             // document.getElementById("intro-text").style.color = "#f0f0f0";
//             navSection.style.color = "#ffffff";
//             navSection.nav.style.backgroundColor = "#000000";
//             // document.getElementById("Instagram").src = "./images/instagram.c.png";
    
//             // contactSection.div.form.div.div.input.style.backgroundColor = contactSection.div.form.input.style.backgroundColor = contactSection.div.form.div.textarea.style.backgroundColor = "#cfcfcf";
            
//             colorControlSwitch = 1;
//         } else {
//             document.body.style.color = "#ffffff";
//             document.body.style.backgroundColor = "#1c1c1c";
//             // document.getElementById("navigation-section").nav.backgroundColor = "#1414145e";
//             document.getElementById("Instagram").src = "images/instagram.png";
//             document.getElementById("Instagram").src = "instagram.png";
//             colorControlSwitch = 0;
//         }
//     }
    