const ht_year = document.getElementById("current-year");
let today = new Date();
let year = today.getFullYear();
ht_year.textContent = year;

const LoginTrigger = document.getElementById("LogIn_Function");
LoginTrigger.addEventListener("click", function () {
  const login = document.getElementById("form_wrprs");
  const reg = document.getElementById("Registration_");
  login.classList.add("trans_add");
  login.classList.remove("form_wrpr");
  reg.style.zIndex = "1";
});

const close_tab = document.getElementById("close_tab");
close_tab.addEventListener("click", function () {
  const login = document.getElementById("form_wrprs");
  const reg = document.getElementById("Registration_");
  login.classList.remove("trans_add");
  login.classList.add("form_wrpr");
  reg.style.zIndex = "-1";
});

const Sign_Trigger = document.getElementById("SignUp_Function");
Sign_Trigger.addEventListener("click", function () {
  const signUP = document.getElementById("form_wrpr");
  signUP.classList.add("signUPP_trans");
  signUP.classList.remove("signUPP");
});

const sign_close_tab = document.getElementById("sign_close_btn");
sign_close_tab.addEventListener("click", function () {
  const signUP = document.getElementById("form_wrpr");
  signUP.classList.remove("signUPP_trans");
  signUP.classList.add("signUPP");
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCY95cVPop0urDCihWlHauygckdHy9-ZVY",
  authDomain: "hotel-mangement-system-fcc69.firebaseapp.com",
  projectId: "hotel-mangement-system-fcc69",
  storageBucket: "hotel-mangement-system-fcc69.appspot.com",
  messagingSenderId: "579319450886",
  appId: "1:579319450886:web:ae08cdab9685707b8d6287",
  measurementId: "G-F5E7S0K1D7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var email = document.getElementById("signupEmail").value;
  var password = document.getElementById("signupPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      userCredentials.user;
      alert("Registration Successfully");
      window.location.reload();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMsg = error.message;

      console.log(errorCode);
      alert(errorMsg);
    });
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var email = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      // console.log(user);
      alert(user.email + " LogIn Successfully");
      LoginWindow();
      document.getElementById("wtsp_register").style.display = "none";
      document.getElementById("logout_register").style.display = "flex";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMsg = error.message;
      console.log(errorCode);
      alert(errorMsg);
    });
});

// logout

document.getElementById("LogOut").addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("Logged out successfully");
      window.location.reload();
      document.getElementById("LogOUTT").style.display = "none";
    })
    .catch((error) => {
      alert(error);
    });
});

function LoginWindow() {
  const login = document.getElementById("form_wrprs");
  const reg = document.getElementById("Registration_");
  login.classList.remove("trans_add");
  login.classList.add("form_wrpr");
  reg.style.zIndex = "-1";
}
