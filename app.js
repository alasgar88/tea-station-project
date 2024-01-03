// setup nav
const navBtn = document.getElementById('nav-btn');
const navbar = document.getElementById('navbar');
const navClose = document.getElementById('nav-close');
// show nav
// navBtn.addEventListener("click", () => {
//   navbar.classList.add("showNav");
// });
// close nav
// navClose.addEventListener("click", () => {
//   navbar.classList.remove("showNav");
// });
//setup date
// const date = (document.getElementById(
//   "date"
// ).innerHTML = new Date().getFullYear());

// Scroll to the bottom of the page
function scrollToBottom() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth', // You can change this to 'auto' for an instant scroll
  });
}

// Call the function to scroll to the bottom
scrollToBottom();
