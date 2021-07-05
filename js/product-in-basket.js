const buyModal = document.querySelector(".product-in-basket");
const buyButtonsOpen = document.querySelectorAll(".perforators-item-button-buy");
const buyButtonClose = buyModal.querySelector(".button-close")

buyButtonsOpen.forEach(function(buyButtonOpen) {
  buyButtonOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyModal.classList.add("modal-show-grid");
  });
});

buyButtonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyModal.classList.remove("modal-show-grid");
});
