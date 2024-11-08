// Optional: Add floating animation
document.querySelector(".flier").classList.add("floating");

setTimeout(() => {
  document.querySelector(".flier").classList.remove("floating");
}, 5000);
