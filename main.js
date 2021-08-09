const details = document.querySelectorAll("details");

document.body.addEventListener("click", (e) => {
  details.forEach((detail) => {
    if (detail !== e.target.parentElement) detail.removeAttribute("open");
  });
});
