//refferencing DOM elements.
const mainGallery = document.getElementById("container");
const contentModal = document.getElementById("content-modal");
const modal = document.getElementById("modal");
const selectedVisual = document.getElementById("selectedCoversVisual");
const link = document.getElementById("a");
const cover = document.getElementsByClassName("selectedCoverImage");

const index = [45, 60, 52, 53, 55, 56, 61, 62, 58];

//create a fucntion to iterate through index, and that can reffer to each element a specific image source.
//index.forEach((issue) => {
function triggerModal(event) {
  event.preventDefault();
  index.forEach((issue) => {
    modal.style.visibility = "visible";
    selectedVisual.src = `media/issue_${issue}.png`;
    selectedVisual.alt = `Selected cover`;
  });
}
/*cover.addEventListener("click", () => {
  //modal pops up when clicking on image
  index.forEach((issue) => {
    modal.style.visibility = "visible";
    selectedVisual.src = `media/issue_${issue}.png`;
    selectedVisual.alt = `Selected cover`;
  });
//});*/

modal.addEventListener("click", () => {
  modal.style.visibility = "hidden";
  modal.src = "";
  modal.alt = "";
});
