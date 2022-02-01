const screen = document.getElementById("screen");

function clearScreen() {
  screen.innerHTML = "";
}

function display(value) {
  screen.innerHTML += value;
}

function calculate() {
  var x = screen.innerHTML;
  try {
    var y = eval(x);
  } catch (err) {}
  screen.innerHTML = y;
}

screen.addEventListener("keypress", handlekeypress, false);

var handlekeypress = function (event) {
  var asciiCode = event.key ? event.key : event.charCode;
  var asciiValue = String.fromCharCode(asciiCode);
  display(value);
  return false;
};

document.addEventListener("keydown", function(event) {
  display(event.key);
});

