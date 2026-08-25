alert("Welcome to my website!");
let helloButton = document.getElementById("helloBtn");

helloButton.addEventListener("click", function() {

    document.getElementById("home").innerHTML =
    "<h1>Hello! 👋</h1><p>Thanks for visiting my website!</p>";

});
let form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let message = document.getElementById("message").value;

    let result = document.getElementById("result");


    if (name === "" || email === "" || message === "") {

        result.innerHTML = "⚠️ Please fill all fields.";

        return;
    }


    result.innerHTML =
        "✅ Thank you, " + name + "! Your message has been received.";

});
let saveButton = document.getElementById("saveName");

saveButton.addEventListener("click", function() {

    let name = document.getElementById("userName").value;

    if (name === "") {

        alert("Please enter your name.");

        return;
    }

    localStorage.setItem("userName", name);

    document.getElementById("welcome").innerHTML =
        "Hello, " + name + " 👋";

});
let deleteButton = document.getElementById("deleteName");

deleteButton.addEventListener("click", function() {

    localStorage.removeItem("userName");

    document.getElementById("welcome").innerHTML =
        "Name deleted.";

});
let jokeButton = document.getElementById("jokeButton");

jokeButton.addEventListener("click", async function() {

    let joke = document.getElementById("joke");

    joke.innerHTML = "Loading... ⏳";

    try {

        let response = await fetch(
            "https://official-joke-api.appspot.com/random_joke"
        );

        let data = await response.json();

        joke.innerHTML =
            data.setup + "<br><br>" + data.punchline;

    } catch (error) {

        joke.innerHTML =
            "Sorry, something went wrong. ❌";

    }

});