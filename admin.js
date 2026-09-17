/* =========================
   URL DATABASE GOOGLE SHEETS
========================= */

const API_URL = "https://script.google.com/macros/s/AKfycbx40XqSi80kFpZUjretfYjiltEs1yTxRq9yIDixoUSMbWJVJo3UGafRdhIj7dRaPTBZAQ/exec";


/* =========================
   LOGIN ADMIN
========================= */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const username =
            document.getElementById("username").value.trim();

        const password =
            document.getElementById("password").value;

        const message =
            document.getElementById("loginMessage");

        message.style.color = "black";
        message.innerHTML = "Memeriksa login...";


        const callbackName =
            "loginCallback_" + Date.now();

        window[callbackName] = function(data) {

            if (data.success) {

                localStorage.setItem(
                    "adminLogin",
                    "true"
                );

                message.style.color = "green";

                message.innerHTML =
                    "Login berhasil! Mengarahkan...";

                setTimeout(function() {

                    window.location.href =
                        "dashboard.html";

                }, 700);

            } else {

                message.style.color = "red";

                message.innerHTML =
                    data.message ||
                    "Username atau password salah!";

            }

            delete window[callbackName];
            script.remove();

        };


        const script =
            document.createElement("script");

        script.src =
            API_URL +
            "?action=login" +
            "&username=" +
            encodeURIComponent(username) +
            "&password=" +
            encodeURIComponent(password) +
            "&callback=" +
            callbackName;

        document.body.appendChild(script);

    });

}


/* =========================
   CEK LOGIN DASHBOARD
========================= */

if (
    window.location.pathname.includes("dashboard.html")
) {

    const sudahLogin =
        localStorage.getItem("adminLogin");

    if (sudahLogin !==
