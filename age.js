function checkAge() {
    var age = document.getElementById("ageInput").value;
    age = parseInt(age);

    if (age >= 18) {
        displayResult("You are an adult");
    } else {
        displayResult("You are a child");
    }
}

function displayResult(message) {
    var resultCard = document.getElementById("result-card");
    var resultText = document.getElementById("result-text");

    resultText.textContent = message;
    resultCard.style.display = "block";
}


function websiteopen() {

    var userAge = prompt("Please enter your age:");

    if (userAge >= 18) {
        alert("Welcome! You can continue to the website.");
    } else {
        alert("Sorry, you are not allowed to access this website. You must be 18 or older.");
        window.close();
    }

}
// Call the function when the page loads
window.onload = websiteopen();

