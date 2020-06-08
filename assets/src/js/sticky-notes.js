var stickyNote = document.querySelectorAll(".postit");

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
