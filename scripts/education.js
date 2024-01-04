const eduBtns = document.querySelectorAll(".edu-button");
const explorinBtn = document.getElementById("explorin-btn");
const shivalikBtn = document.getElementById("shivalik-btn");
const sunriseBtn = document.getElementById("sunrise-btn");
const instituteImg = document.getElementById("institute-image");
let institutePara = document.getElementById("edu-para");

const eduParas = ["<br>Education : Web Dev. [Full Stack]<br><br>Experience : I've Been a part of Explorin since September 2023, have learned a lot and have acheived a lot too. From getting selected to star coder to coding buddy to rank A student, the journey was memorable and still going on & on.", 
                  "<br>Education : B.Tech CSE [Data Science]<br><br>Experience : Joined in 2022, its been a lot of times that i've gained appreciations and learnings. From joining in to being a tech vice president of a club to ECAs and hobby activities to exams, had gained a lot to share.",
                  "<br>Education : 10th & 12th [ICSE]<br><br>Experience : from 2016 to 2022, my experience in Sunrise had been a blast! had won district level olympiads, ranked in state and national levels olympiads. Everyone was supportive & helped my grow in life for my better future." ];

let currBtn = 0;
let theme = 0;

function handleThemeSwitch() {
    if(theme == 0) {
        theme = 1;
    } else {
        theme = 0;
    }

    if(currBtn == 0) {
        explorinClick();
    } else if(currBtn == 1) {
        shivalikClick();
    } else {
        sunriseClick();
    }
}

function resetEduButtons(select) {
    if(theme == 0) {
        if(select != 0) document.getElementById("explorin-btn").style.backgroundColor = "#3c3c3c";
        if(select != 1) document.getElementById("shivalik-btn").style.backgroundColor = "#3c3c3c";
        if(select != 2) document.getElementById("sunrise-btn").style.backgroundColor = "#3c3c3c";
    } else {
        if(select != 0) document.getElementById("explorin-btn").style.backgroundColor = "#a5ffa6c1";
        if(select != 1) document.getElementById("shivalik-btn").style.backgroundColor = "#a5ffa6c1";
        if(select != 2) document.getElementById("sunrise-btn").style.backgroundColor = "#a5ffa6c1";
    }
}

function explorinClick() {
    currBtn = 0;
    resetEduButtons(0);
    if(theme == 0) {
        document.getElementById("explorin-btn").style.backgroundColor = "#c4c4c480";
        document.getElementById("institute-image").style.backgroundImage = "url(../assets/images/explorin-inst.b.jpg)";
        document.querySelector("#edu-para").innerHTML = eduParas[0];
    } else {
        document.getElementById("explorin-btn").style.backgroundColor = "#14ee6fd9";
        document.getElementById("institute-image").style.backgroundImage = "url(../assets/images/explorin-inst.jpg)";
        document.querySelector("#edu-para").innerHTML = eduParas[0];
    }
}

function shivalikClick() {
    currBtn = 1;
    resetEduButtons(1);
    if(theme == 0) {
        document.getElementById("shivalik-btn").style.backgroundColor = "#c4c4c480";
        document.getElementById("institute-image").style.backgroundImage = "url(../assets/images/shivalik-inst.b.jpg)";
        document.querySelector("#edu-para").innerHTML = eduParas[1];
    } else {
        document.getElementById("shivalik-btn").style.backgroundColor = "#14ee6fd9";
        document.getElementById("institute-image").style.backgroundImage = "url(../assets/images/shivalik-inst.jpg)";
        document.querySelector("#edu-para").innerHTML = eduParas[1];
    }
}

function sunriseClick() {
    currBtn = 2;
    resetEduButtons(2);
    if(theme == 0) {
        document.getElementById("sunrise-btn").style.backgroundColor = "#c4c4c480";
        document.getElementById("institute-image").style.backgroundImage = "url(../assets/images/sunrise-acad.b.jpg)";
        document.querySelector("#edu-para").innerHTML = eduParas[2];
    } else {
        document.getElementById("sunrise-btn").style.backgroundColor = "#14ee6fd9";
        document.getElementById("institute-image").style.backgroundImage = "url(../assets/images/sunrise-acad.jpg)";
        document.querySelector("#edu-para").innerHTML = eduParas[2];
    }
}
