const eduBtns = document.querySelectorAll(".edu-button");
const explorinBtn = document.getElementById("explorin-btn");
const shivalikBtn = document.getElementById("shivalik-btn");
const sunriseBtn = document.getElementById("sunrise-btn");
const instituteImg = document.getElementById("institute-image");
let institutePara = document.getElementById("edu-para");

const eduParas = ["<br>Education : Web Development [Full Stack]<br><br>Experience : I've Been a part of Explorin since September 2023, have learned a lot of things and have acheived a lot too. From getting selected to star coder to coding buddy to rank A student, the journey was memorable and still on-going.", 
                  "<br>Education : B.Tech CSE [Data Science]<br><br>Experience : Joined in 2022, its been a lot of times that i've gained appreciations and learnings. From joining in to being a tech vice president of a college club to studies to exams then ECAs and hobby activities, had gained a lot to share.",
                  "<br>Education : 10th & 12th [ICSE]<br><br>Experience : from 2016 to 2022, my experience in Sunrise had been a blast! had won district level competetions, ranked in state levels, and been into national levels a lot. Everyone was supportive and helped my grow in life for my better future." ];

function resetEduButtons(select) {
    if(select != 0) document.getElementById("explorin-btn").style.backgroundColor = "#3c3c3c";
    if(select != 1) document.getElementById("shivalik-btn").style.backgroundColor = "#3c3c3c";
    if(select != 2) document.getElementById("sunrise-btn").style.backgroundColor = "#3c3c3c";
}

function explorinClick() {
    resetEduButtons(0);
    document.getElementById("explorin-btn").style.backgroundColor = "#c4c4c480";
    document.getElementById("institute-image").style.backgroundImage = "url(../assets/images/explorin-inst.b.jpg)";
    document.querySelector("#edu-para").innerHTML = eduParas[0];
}

function shivalikClick() {
    resetEduButtons(1);
    document.getElementById("shivalik-btn").style.backgroundColor = "#c4c4c480";
    document.getElementById("institute-image").style.backgroundImage = "url(../assets/images/shivalik-inst.b.jpg)";
    document.querySelector("#edu-para").innerHTML = eduParas[1];
}

function sunriseClick() {
    resetEduButtons(2);
    document.getElementById("sunrise-btn").style.backgroundColor = "#c4c4c480";
    document.getElementById("institute-image").style.backgroundImage = "url(../assets/images/sunrise-acad.b.jpg)";
    document.querySelector("#edu-para").innerHTML = eduParas[2];
}