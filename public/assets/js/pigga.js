// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getAnalytics
} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6BtuPC9mLDkXeEF6E_FUlSb2L6iG2lS4",
    authDomain: "wecreationofficial2021.firebaseapp.com",
    databaseURL: "https://wecreationofficial2021-default-rtdb.firebaseio.com",
    projectId: "wecreationofficial2021",
    storageBucket: "wecreationofficial2021.appspot.com",
    messagingSenderId: "1037471149486",
    appId: "1:1037471149486:web:e782402e35c0414b666c3f",
    measurementId: "G-Z5V8YH9411"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore();
firebase = initializeApp(firebaseConfig);
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
console.log('test');

//Feedback Form
const feedform = document.querySelector(".feedform");

const name = document.querySelector(".name");

const emailid = document.querySelector(".email");

const feedmsg = document.querySelector(".feed");

const submit = document.querySelector(".submit-form");

console.log('test')
submit.addEventListener("click", (e) => {
    e.preventDefault();
    db.collection("feedform")
        .doc()
        .set({

            name: name.Value,
            emailid: emailid.Value,
            feedmsg: feedmsg.Value,

        })
        .then(() => {
            feedform.reset();
            modal.classList.toggle("display-none");
        });


});



//   // reference your database
//   var feedback = firebase.database().ref("feedbackform");

//   document.getElementById("feedbackform").addEventListener("submit", submitForm);

//   function submitForm(e) {
//     e.preventDefault();

//     var name = getElementVal("name");
//     var emailid = getElementVal("emailid");
//     // var rate = getElementVal("rate");
//     var feedmsg = getElementVal("msgContent");

//     saveMessages(name, emailid, feedmsg);
//    console.log(name, emailid, feedmsg);

//     //   enable alert
//     // document.querySelector(".alert").style.display = "block";

//     //   remove the alert
//     // setTimeout(() => {
//     //   document.querySelector(".alert").style.display = "none";
//     // }, 3000);

//     document.getElementById("feedbackform").reset();
// }

//     const saveMessages = (name, emailid, feedmsg) => {
//         var newfeedbackform = feedback.push();  

//         newfeedbackform.set({
//             name: name,
//             emailid: emailid,
//             feedmsg: feedmsg,
//         });
//     };
//  console.log(newfeedbackform);
//     const getElementVal = (id) => {
//         return document.getElementById(id).value;
//       };    



// smooth scroll
$(document).ready(function () {
    $(".navbar .nav-link").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });
});




