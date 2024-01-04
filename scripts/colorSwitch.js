const body = document.body;
// const navSection = document.querySelector("header");
// const contactSection = document.getElementById("contact-section");
const contactInputs = document.querySelectorAll("#contactNow, #contactMeInputField > div > input, #contactMeInputField > textarea");
const projects = document.querySelectorAll(".projects");

let colorControlSwitch = 0

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
        
        contactInputs.forEach((item) => {
            item.style.color = "#101010";
            item.style.backgroundColor = "#cfcfcfb5"; 
        });

        projects.forEach((item) => {
            item.style.color = "#000000";
            item.style.backgroundColor = "#eaf0f5ce"; 
        });

        document.querySelectorAll(".edu-button").forEach((item) => {
            item.style.color = "#000000";
        });
        document.querySelector("#edu-para").style.color = "#000000";
        document.querySelector("#edu-para").style.backgroundImage = "linear-gradient(rgba(210, 210, 210, 0.4), rgba(150, 150, 150, 0.8))";
        // document.querySelector("#institute-image").style

            
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

        contactInputs.forEach((item) => {
            item.style.color = "#ffffff";
            item.style.backgroundColor = "#181818b5"; 
        });

        projects.forEach((item) => {
            item.style.color = "#ffffff";
            item.style.backgroundColor = "#4c4c4ccc"; 
        });

        document.querySelectorAll(".edu-button").forEach((item) => {
            item.style.color = "#ffffff";
        });
        document.querySelector("#edu-para").style.color = "#ffffff";
        document.querySelector("#edu-para").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.35))";
        // document.querySelector

    }
}
