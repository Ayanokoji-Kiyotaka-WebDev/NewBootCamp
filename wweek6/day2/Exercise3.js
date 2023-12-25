let box = document.getElementById("box");
let target = document.getElementById("target");

box.addEventListener("dragstart", dragStart);
box.addEventListener("dragend", dragEnd);
target.addEventListener("dragover", dragOver);
target.addEventListener("dragenter", dragEnter);
target.addEventListener("dragleave", dragLeave);
target.addEventListener("drop", drop);

function dragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
  event.target.style.opacity = "0.5";
}

function dragEnd(event) {
  event.target.style.opacity = "1";
}

function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  event.preventDefault();
  event.target.style.background = "green";
}

function dragLeave(event) {
  event.target.style.background = "yellow";
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text/plain");
  event.target.appendChild(document.getElementById(data));
  event.target.style.background = "yellow";
}