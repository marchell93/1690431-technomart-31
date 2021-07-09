const modal = document.querySelector(".modal-write-us");
const buttonOpen = document.querySelector(".button-contacts");
const buttonClose = modal.querySelector(".button-close");
const writeForm = modal.querySelector(".write-us-form");
const nameInput = modal.querySelector("[name=name]");
const emailInput = modal.querySelector("[name=email]");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

buttonOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  if (storage) {
    nameInput.value = storage;
    emailInput.focus();
  } else {
    nameInput.focus();
  }
});

buttonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  modal.classList.remove("modal-error");
});

writeForm.addEventListener("submit", function (evt) {
  if(!nameInput.value || !emailInput.value) {
    evt.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", nameInput.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Esc" || evt.key === "Escape") {
    if (modal.classList.contains("modal-show")) {
      evt.preventDefault();
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-error");
    }
  }
});
