function fightersFunction() {
  var x = document.getElementById("fighters-body");
  var element = document.getElementById("fighters-span");
  if (x.style.display === "none") {
    x.style.display = "block";
    element.innerHTML = "Collapse";
  } else {
    x.style.display = "none";
    element.innerHTML = "Expand";
  }
}

function twinFunction() {
  var x = document.getElementById("twin-body");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function strikeFunction() {
  var x = document.getElementById("strike-body");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function bombersFunction() {
  var x = document.getElementById("bombers-body");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function aircraftFunction() {
  var x = document.getElementById("aircraft-body");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}