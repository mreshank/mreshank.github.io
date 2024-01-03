function hello() {
    alert("Hello, World!");
}

let colorControlSwitch = 0

const body = document.body;
const navSection = document.querySelector("header");
const contactSection = document.getElementById("contact-section");
const contactInputs = document.querySelectorAll("#contactNow, #contactMeInputField > div > input, #contactMeInputField > textarea")

function handleColorSwitch() {

    if(colorControlSwitch == 0) {
        colorControlSwitch = 1
        body.style.color = "#000000";
        body.style.backgroundColor = "#f8feff";
        document.getElementById("color-switch-button").style.backgroundImage = "url(./assets/images/colorSwitch.b.png)";
        document.getElementById("intro-image").src = "./assets/images/profile.c.png"
        document.getElementById("Instagram").src = "./assets/images/instagram.c.png";
        document.getElementById("LinkedIn").src = "./assets/images/linkedin.c.png";
        document.getElementById("GitHub").src = "./assets/images/github.c.png";
        document.getElementById("YouTube").src = "./assets/images/youtube.c.png";
        document.getElementById("WhatsApp").src = "./assets/images/whatsapp.c.png";
        document.getElementById("LinkTree").src = "./assets/images/linktree.c.png";
        document.getElementById("intro-image-and-text").style.backgroundImage = "url(./assets/images/cover.bw.jpg)";
        navSection.nav.style.backgroundColor = "#1a252760";
        contactInputs.style.color = "#101010";
        contactInputs.style.backgroundColor = "#cfcfcfb5";
    } else {
        colorControlSwitch = 0;
        body.style.color = "#ffffff";
        body.style.backgroundColor = "#1c1c1c";
        document.getElementById("color-switch-button").style.backgroundImage = "url(./assets/images/colorSwitch.c.png)";
        document.getElementById("intro-image").src = "./assets/images/profile.png"
        document.getElementById("Instagram").src = "./assets/images/instagram.png";
        document.getElementById("LinkedIn").src = "./assets/images/linkedin.png";
        document.getElementById("GitHub").src = "./assets/images/github.png";
        document.getElementById("YouTube").src = "./assets/images/youtube.png";
        document.getElementById("WhatsApp").src = "./assets/images/whatsapp.png";
        document.getElementById("LinkTree").src = "./assets/images/linktree.png";
        document.getElementById("intro-image-and-text").style.backgroundImage = "url(./assets/images/cover.png)";
        navSection.nav.style.backgroundColor = "#14141470";
        contactInputs.style.color = "#ffffff";
        contactInputs.style.backgroundColor = "#181818b5";
    }
}










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
    