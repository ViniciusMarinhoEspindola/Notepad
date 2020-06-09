const stickyNote = document.querySelectorAll(".postit");
const stickyNotesContainer = document.getElementById("sticky-notes");
// Rotate note in random position //
stickyNote.forEach((note) => {
  deg = getRandomInt(-7, 7);
  note.style.webkitTransform = "rotate(" + deg + "deg)";
  note.style.mozTransform = "rotate(" + deg + "deg)";
  note.style.msTransform = "rotate(" + deg + "deg)";
  note.style.oTransform = "rotate(" + deg + "deg)";
  note.style.transform = "rotate(" + deg + "deg)";
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  randomNumb = Math.floor(Math.random() * (max - min)) + min;
  if ([0, 1, -1].includes(randomNumb)) {
    getRandomInt(min, max);
  }
  return randomNumb;
}
// -- //

// Drag in Drop Sticky Note //
var currentPostit = null;
var currentLeft = 0;
var currentTop = 0;
var startX = 0;
var startY = 0;
var move = false;

stickyNotesContainer.addEventListener("mousemove", dragStickyNote);
stickyNotesContainer.addEventListener("mouseup", dropStickyNote);

stickyNote.forEach((note) => {
  note.addEventListener("mousedown", takeStickyNote);
});

function takeStickyNote(event) {
  currentPostit = this;
  currentLeft = currentPostit.offsetTop;
  currentTop = currentPostit.offsetLeft;

  startX = event.clientX;
  startY = event.clientY;

  move = true;
}

function dragStickyNote(event) {
  if (move == true) {
    let newTop = currentTop + event.clientY - startY;
    let newLeft = currentLeft + event.clientX - startX;

    currentPostit.style.left = newLeft + "px";
    currentPostit.style.top = newTop + "px";
    currentPostit.style.zIndex = 9;
  }
}

function dropStickyNote(event) {
  if (currentPostit == null) return;
  currentPostit.style.zIndex = 6;
  currentPostit = null;
  move = false;
}
// -- //
