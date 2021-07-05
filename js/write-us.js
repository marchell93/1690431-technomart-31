const modal = document.querySelector(".modal-write-us");
const buttonOpen = document.querySelector(".button-contacts");
const buttonClose = modal.querySelector(".button-close")

buttonOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
});

buttonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
});
