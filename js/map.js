const mapModal = document.querySelector(".modal-big-map");
const mapButtonOpen = document.querySelector(".contacts-map");
const mapButtonClose = mapModal.querySelector(".map-close")

mapButtonOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.add("modal-show");
});

mapButtonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.remove("modal-show");
});
