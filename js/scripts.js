/* Navigation bar - active link change */

var nav = document.getElementsByTagName("nav")[0];
var navmenu = nav.getElementsByClassName("nav-menu")[0];
var tabs = navmenu.getElementsByTagName("li");

for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function() {
    var active = document.getElementsByClassName("nav-active")[0];
    active.className = active.className.replace("nav-active", "");
    this.className += "nav-active";
  });
}

/* Promo section - slideshow */

var slideIndex = 1;
var promo = document.getElementById("promo");

var slideprev = promo.getElementsByClassName("slide-prev")[0];
slideprev.addEventListener("click", function() {
  updateSlide(-1);
});

var slidenext = promo.getElementsByClassName("slide-next")[0];
slidenext.addEventListener("click", function() {
  updateSlide(1);
});

function updateSlide(n) {
  promo.className = promo.className.replace("bg-img-" + slideIndex, "bg-img-X");
  slideIndex += n;
  if (slideIndex > 3) { slideIndex = 1 }
  else if (slideIndex < 1) { slideIndex = 3 }
  promo.className = promo.className.replace("bg-img-X", "bg-img-" + slideIndex);
}