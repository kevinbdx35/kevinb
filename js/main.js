/************************************************************************/
/*Minimal theme switcher*/
/************************************************************************/
"use strict";

const themeSwitcher = {
  //Config
  buttonsTarget: "a[data-theme-switcher]",
  buttonAttribute: "data-theme-switcher",
  rootAttribute: "data-theme",

  //Init
  init() {
    document.querySelectorAll(this.buttonsTarget).forEach(
      function (button) {
        button.addEventListener(
          "click",
          function (event) {
            event.preventDefault();
            document
              .querySelector("html")
              .setAttribute(
                this.rootAttribute,
                event.target.getAttribute(this.buttonAttribute)
              );
          }.bind(this),
          false
        );
      }.bind(this)
    );
  },
};

themeSwitcher.init();

/************************************************************************/
/*Modal implementation*/
/************************************************************************/

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClosModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelector(".show-modal");

console.log(btnOpenModal);

//Modal opening
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", function () {
    console.log("Button Clicked");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

//Modal closing
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnClosModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//Modal closing with keyboard
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    console.log("ok");
    closeModal();
  }
});
