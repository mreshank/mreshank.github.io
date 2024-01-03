let x = 10
console.log("outer", x);
function fun() {
    x = 20;
    console.log("inner", x);
}
console.log(fun)




{/* <script type="module">
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
</script> */}