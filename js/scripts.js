/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.getElementById("contactForm").addEventListener("submit", function (event) {

    console.log("Form submitted");
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const email = "mailto:urielahuatzi3@gmail.com";

    const linkmail = `${email}?subject=${encodeURIComponent(subject)}&body=
    ${encodeURIComponent(message)}`;

    window.location.href = linkmail;
} );