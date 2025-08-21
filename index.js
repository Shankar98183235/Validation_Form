document.getElementById("validation_form").addEventListener("submit", function(e) {
    e.preventDefault();

    let isValid = true;

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;
    let genderSelected = document.querySelector('input[name="Gender"]:checked');
    let termsChecked = document.getElementById("terms").checked;


    document.querySelectorAll(".error").forEach(el => el.style.display = "none");

    if (username.length < 5 || username.length > 8) {
        document.getElementById("username_error").style.display = "block";
        isValid = false;
    }

    if (password.length < 8 || password.length > 16) {
        document.getElementById("password_error").style.display = "block";
        isValid = false;
    }

    if (age === "" || age < 21 || age > 32) {
        document.getElementById("age_error").style.display = "block";
        isValid = false;
    }

    if (!genderSelected) {
        document.getElementById("gender_error").style.display = "block";
        isValid = false;
    }

    if (!termsChecked) {
        document.getElementById("terms_error").style.display = "block";
        isValid = false;
    }

    if (isValid) {
        alert("Form validated successfully!");
    }
});
