'use strict'

// Define Submit&Cancel Button Constant

const submitBtn = document.getElementById("submit-btn"); // object | null

// console.log(submitBtn, typeof submitBtn);

const cancelBtn = document.getElementById("cancel-btn"); // object | null

// console.log(cancelBtn, typeof cancelBtn);

// Define Array of valid emails

const validEmails = ["email1@gmail.com", "email2@gmail.com", "email3@gmail.com", "email4@gmail.com", "email5@gmail.com"]; // array

console.log(validEmails, typeof validEmails);

// Define Global variable for email check

let validEmail = false; //boolean

console.log(validEmail, typeof validEmail);

// Add Event listener to the Button Submit

submitBtn.addEventListener("click", function() {

    const userEmail = (document.getElementById ("user-email")).value; // string

    console.log(userEmail, typeof userEmail, "email Input");

    for (let i = 0; i < validEmails.length; i++) {

        const emailElem = validEmails[i]; // string

        console.log(emailElem, typeof emailElem);

        console.log(userEmail, typeof userEmail, "input email");

        if (userEmail === emailElem) {
     
            validEmail = true; //boolean

        }
        
        console.log(validEmail, typeof validEmail, "in For");

        console.log(validEmail, typeof validEmail);

        if (!validEmail) {
         
            document.getElementById("result").innerHTML = "Invalid Data";
     
        } else if (validEmail) {
    
            document.getElementById("result").innerHTML = "Valid Email";
    
        };
    
        document.getElementById("result-box").classList.remove("hidden");

    };

});

// Add Event listener to the Button Cancel

cancelBtn.addEventListener("click", function () {

    // Clean Input

    document.getElementById("user-email").value = "";

    validEmail = false; //boolean

    console.log(validEmail, typeof validEmail);

    // Hide Alert

    document.getElementById("result-box").classList.add("hidden");

});
