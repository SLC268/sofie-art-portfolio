window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

//adding responsive nav for mobile screens

function toggleMenu() {
  var x = document.getElementById("nav-links-sub");
  if (x.style.left != "0px") {
    x.style.left = "0px";
    document.body.style.overflowY = "hidden";
  } else {
    x.style.left = "-200px";
    document.body.style.overflowY = "visible";
  }
}

function hideMenu() {
  var x = document.getElementById("nav-links-sub");

  x.style.left = "-200px"; // Hide the menu

  document.body.style.overflowY = "visible"; // Restore scroll
}
