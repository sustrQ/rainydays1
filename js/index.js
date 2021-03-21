const nav = document.querySelector(".navbar");
const logo = document.querySelector(".nlogo");
const envelope = document.querySelector(".fixedenvelope");

function handleScroll() {
  console.log(window.scrollY);

  const scrolledY = window.scrollY;

  if (scrolledY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }

  if (scrolledY > 1600) {
    envelope.classList.add("stop");
  } else {
    envelope.classList.remove("stop");
  }
}

window.addEventListener("scroll", handleScroll);
