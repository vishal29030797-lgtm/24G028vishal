document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop form from submitting

        // Get values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const department = document.getElementById("department").value;
        const year = document.getElementById("year").value;
        const eventName = document.getElementById("event").value;

        // Phone validation (10 digits only)
        const phonePattern = /^[0-9]{10}$/;

        if (!phonePattern.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        // Check if any select field is empty
        if (department === "" || year === "" || eventName === "") {
            alert("Please select all dropdown options.");
            return;
        }

        // If everything is valid
        alert("Registration Successful!\n\nThank you, " + name + " 🎉");

        // Reset form
        form.reset();
    });

});
