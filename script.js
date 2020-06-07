let hamburguerBtn = document.getElementById("hamburguer");
hamburguerBtn.addEventListener("click", function () {
  document.getElementById("nav").classList.toggle("active");
  document.getElementById("navbar").classList.toggle("active");
});

let closeSrc = document.getElementById("closeSrc");
closeSrc.addEventListener("click", function () {
  document.getElementById("search").classList.toggle("close-src");
  closeSrc.classList.toggle("close-src-btn");
});

ClassicEditor.create(document.querySelector("#editor"))
  .then((editor) => {
    console.log(editor);
  })
  .catch((error) => {
    console.error(error);
  });
