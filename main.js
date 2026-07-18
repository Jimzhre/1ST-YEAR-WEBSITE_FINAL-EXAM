function signup(){

    var username =
    document.getElementById("username").value;

    var password =
    document.getElementById("password").value;

    if(username == "" || password == ""){
        document.getElementById("message").innerHTML =
        "Fill all fields";
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    document.getElementById("message").style.color =
    "lightgreen";
    document.getElementById("message").innerHTML =
    "Account Created";
}

function login(){

    var username =
    document.getElementById("username").value;

    var password =
    document.getElementById("password").value;

    var savedUsername =
    localStorage.getItem("username");

    var savedPassword =
    localStorage.getItem("password");

    if(username == savedUsername &&
       password == savedPassword){

        document.getElementById("login-overlay")
        .style.display = "none";

        document.body.classList.remove("locked");
    }
    else{

        document.getElementById("message").innerHTML =
        "Wrong Username or Password";
    }
}

window.onload = function(){

    document.body.classList.add("locked");

    if(localStorage.getItem("loggedIn") == "true"){

        document.getElementById("login-overlay")
        .style.display = "none";

        document.body.classList.remove("locked");
    }
}

const clothes = [
    {
        img: "hoodie.png",
        title: "Hoodies",
        text: "Minimal and clean style for everyday wear."
    },
    {
        img: "shirt.png",
        title: "Shirts",
        text: "Comfortable fit with modern streetwear vibes."
    },
    {
        img: "pants.png",
        title: "Pants",
        text: "Relaxed silhouette made for movement and style."
    },
    {
        img: "shorts.png",
        title: "Shorts",
        text: "Comfortable, breathable shorts made for everyday wear and effortless street style."
    },
    {
        img: "accessories.png",
        title: "Accessories",
        text: "Simple yet stylish pieces that complete and elevate any outfit."
    }
];

let current = 1;

function updateSlider(){

    const cards = document.querySelectorAll(".card");

    let left =
    (current - 1 + clothes.length)
    % clothes.length;

    let center = current;

    let right =
    (current + 1)
    % clothes.length;

    const indexes = [left, center, right];

    cards.forEach((card, i) => {

        card.querySelector("img").src =
        clothes[indexes[i]].img;

        card.querySelector("h1").innerText =
        clothes[indexes[i]].title;

        card.querySelector("p").innerText =
        clothes[indexes[i]].text;

        card.className = "card";

        if(i === 0){
            card.classList.add("left-card");
        }
        else if(i === 1){
            card.classList.add("active");
        }
        else{
            card.classList.add("right-card");
        }
    });
}

function nextSlide(){
    current =
    (current + 1)
    % clothes.length;

    updateSlider();
}

function prevSlide(){
    current =
    (current - 1 + clothes.length)
    % clothes.length;

    updateSlider();
}

updateSlider();