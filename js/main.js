//Funcion para hace swift al text area de la page Contacto.
$("#motive").change(function () {
  var selected = $("option:selected", this).attr("class");
  if (selected == "otro") {
    $(".otro-text").show();
  } else {
    $(".otro-text").hide();
  }
});

// Funcion Main para hacer scrolltop.
let mybutton = document.getElementById("main__scrolltop");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  var body = $("html, body");
  body.stop().animate({ scrollTop: 0 }, 500, "swing", function () {});
}