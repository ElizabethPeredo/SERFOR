function myFunction() {
    var x = document.getElementById("archivos");
    if (x.classList.contains("invisible")) {
        x.classList.remove('invisible');
        x.classList.add('visible');
    }else{
        x.classList.add('invisible');
        x.classList.remove('visible');
    }
  }