"use strict";

var elForm = document.querySelector(".form");
var elGradus = document.querySelector(".havo");
var elInput = document.querySelector(".input-one");
var elInputtwo = document.querySelector(".input-two");
var elSubmit = document.querySelector(".submit");
var elResult = document.querySelector(".result");
elForm.addEventListener("submit", function check(evt) {
  evt.preventDefault();
  var valueGradus = elGradus.value;

  if (elGradus > 5 || elInputtwo.checked && elInput.checked) {
    elResult.textContent = "Ha";
  } else if (valueGradus > 30 || elInput.checked || elInputtwo.checked || valueGradus <= 5) {
    elResult.textContent = "Yo'q";
  }
});