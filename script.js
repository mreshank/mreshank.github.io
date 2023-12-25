import { url } from "inspector";
import "./styles.css";

// function switchColorFunction() {
    body.color = rgb(0, 0, 0);
    body.backgroundColor = rgb(215, 196, 255);
    document.getElementById("navigation-section").nav.backgroundColor = rgba(9, 0, 33, 0.621);
    document.getElementById("navigation-hyperlinks").a.color = rgba(211, 211, 211, 0.968);
    document.getElementById("intro-image").content = url("images/profile.color.png");
    document.getElementById("intro-image-and-text").backgroundImage = url("images/cover.color.jpg");
// }