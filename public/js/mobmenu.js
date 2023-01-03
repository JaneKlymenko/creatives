function mobMenu() {
  var elms = document.getElementsByClassName("mobile");
  let scr = document.getElementById("navigation");
 
  Array.from(elms).forEach((x) => {
    if (x.style.display === "block") {
      x.style.display = "none";
      scr.classList.remove('bg');
    } else {
      x.style.display = "block";
      scr.classList.add('bg');
    }
  });
}


