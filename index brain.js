
let typing_audio = document.getElementById("typing-audio");

let pwd = document.getElementById("password");
pwd.addEventListener("input", (e) => {
  let left = document.getElementById("left");
  let right = document.getElementById("right");
  if (pwd.value.length > 0) {
    right.style.translate = "0px";
    document.querySelector(".container").style.boxShadow =
      "0px 0px 30px 5px #ffffff64";

  } else {
    right.style.translate = "-200px";
    document.querySelector(".container").style.boxShadow = "none";
  }
});

let email = document.getElementById("email");
const admin = JSON.parse(localStorage.getItem("admin"));
let submit_btn = document.getElementById("login-btn");
submit_btn.addEventListener("click", (e) => {
    
    if(email.value == "arockiya"){
        if(pwd.value == "17082002"){
            window.location.href='./branches.html';
            // let show_option = document.querySelector(".branches");
            // show_option.style.display ="block";
        }
        else{alert("pwd not match")}
    }
    else{
        alert("Admin not found!")
    }
})

document.addEventListener("keydown", (event) => {
    typing_audio.play();
}); 