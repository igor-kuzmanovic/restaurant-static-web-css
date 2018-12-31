var nav = document.getElementsByTagName("nav")[0];
var tabs = nav.getElementsByTagName("li");
for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function() {
      var active = document.getElementsByClassName("active")[0];
      active.className = active.className.replace("active", "");
      this.className += "active";
  });
}