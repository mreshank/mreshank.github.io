
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

import { getDatabase, ref, get, set, child, update, remove } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const db = getDatabase();

var namebox = document.getElementById("Namebox");
var rollbox = document.getElementById("Rollbox");
var sectionbox = document.getElementById("Sectionbox");
var genderbox = document.getElementById("Genderbox");

function insertData(){ 
    console.log("insertData function called");

    set (ref(db, "Persons/" +rollbox.value), {
        Name: namebox.value,
        RollNo: rollbox.value,
        Section: sectionbox.value,
        Gender: genderbox.value,
    })

    .then(() =>{
        alert("Data stored successfully.");
    })
    .catch((error) => {
        alert("Error in saving data" +error);
    });
}

function selectData() {
    alert("selection function called");
    get( child( ref(db), "Person/" + rollbox.value ) ).then((snapshot) => {
        if(snapshot.exists()) {
            namebox.value = snapshot.val().Name;
            sectionbox.value = snapshot.val().Section;
            genderbox.value = snapshot.val().Gender;
        }   else {
            alert("No data found for roll number: ", rollbox.value);
    }   }   )
    .catch( (error) => {
        alert("Error in getting data: ", error);
}   );  }

function updateData() {
    console.log( "updateData function called" );
    update( child( ref(db), "Persons/" + rollbox.value ), {
        Name : namebox.value,
        Section : sectionbox.value,
        Gender : genderbox.value
    }   )
    .then( () => {
        alert("Data updated successfully" + rollbox.value);
    }   )
    .catch( (error) => {
        alert("Error in updating data: ", error);
    }   );
}

function deleteData() {
    console.log("deleteData function called");
    remove( child(ref(db), "Persons/" + rollbox.value ) )
    .then( () => {
        alert("Data deleted successfully for roll no." + rollbox.value);
    }   )
    .catch((error) => {
        alert("Error in deleting data: ", error);
    }   );
}

document.getElementById("Insert").addEventListener('click', insertData);
document.getElementById("Select").addEventListener('click', selectData);
document.getElementById("Update").addEventListener('click', updateData);
document.getElementById("Delete").addEventListener('click', deleteData);

// var insertbutton = document.getElementById("Insert");
// var selectbutton = document.getElementById("Select");
// var updatebutton = document.getElementById("Update");
// var deletebutton = document.getElementById("Delete");

// insertbutton.addEventListener('click', insertData);
// selectbutton.addEventListener('click', selectData);
// insertbutton.addEventListener('click', updateData);
// insertbutton.addEventListener('click', deleteData);