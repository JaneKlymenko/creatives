function validateForm() {
    var y, i, valid = true;
    y = document.getElementsByTagName("input");
    for (i = 0; i < y.length; i++) {
      if (y[i].value == "") {
        y[i].className += " invalid";
        valid = false;
      }
    }
    return valid; 
  }
  