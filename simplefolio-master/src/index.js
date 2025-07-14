import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactform");
  const success = document.getElementById("success");
  const error = document.getElementById("error");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_lu7fphp", "template_yhoprsi", this)
      .then(() => {
        success.style.display = "block";
        error.style.display = "none";
        form.reset();
      })
      .catch(() => {
        success.style.display = "none";
        error.style.display = "block";
      });
  });
});

