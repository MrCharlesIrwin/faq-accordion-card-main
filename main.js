const accordion = document.querySelectorAll(".accordion");
const rotateImg = document.querySelector(".rotateImg");

accordion.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("active");
    el.nextElementSibling.classList.toggle("active");
    el.querySelector(".rotateImg").classList.toggle("rotate");
    el.querySelector("em").classList.toggle("font-weight");
    hideAll(el);
  });
});

function hideAll(el) {
  for (var i = 0; i < accordion.length; i++) {
    if (accordion[i] !== el) {
      accordion[i].querySelector(".rotateImg").classList.remove("rotate");
      accordion[i].querySelector("em").classList.remove("font-weight");
      accordion[i].classList.remove("active");
      accordion[i].nextElementSibling.classList.remove("active");
    }
  }
}
