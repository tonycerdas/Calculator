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
  } catch (err) {
  }
  screen.innerHTML = y;
}

