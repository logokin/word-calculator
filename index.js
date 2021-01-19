const input = document.querySelector(".words");
const btn = document.querySelector(".button");
let P = document.querySelector(".p");

btn.addEventListener("click", function () {
  P.classList.add("p-show");

  let word = input.value.trim();
  if (word == "") {
    P.innerHTML = 0;
  } else {
    P.innerHTML = word.split(" ").length;
    console.log(word.split(" ").length);
  }

  icon2.classList.remove("second-icon-show");
  icon1.classList.remove("icons-show");
});

const icon2 = document.querySelector(".second-icon");
const icon1 = document.querySelector(".icons");

input.addEventListener("click", () => {
  icon2.classList.add("second-icon-show");
  icon1.classList.add("icons-show");
});

