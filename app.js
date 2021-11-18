//refferencing DOM elements.
const mainGallery = document.getElementById("cardsbody");
const modal = document.getElementById("modal");
const elements = document.getElementById("under-elements");
const selectedVisual = document.getElementById("selectedVisual");
const link = document.querySelector("a");
const captions = document.querySelector("h4");

const index = [45, 50, 52, 53, 55, 56, 61, 62, 58];

//create a fucntion to iterate through index, and that can reffer to each element a specific image source.
index.forEach((issue) => {
  const cover = document.getElementById("selectedCoverImage"); //create an image for each element inside the index object.
  cover.src = `media/issue_${issue}.png`; // assign src to each created image.
  cover.alt = `Foam magazine cover for issue #${issue}`; // also assign alt attribute to each created image.
  // finally asign a class so we can style the display.
  //same as <img src="/media..." alt="..." class="..." >

  //add eventlistener to image so it calls the modal function with the selected image. */
  cover.addEventListener("click", () => {
    //modal pops up when clicking on image
    modal.style.visibility = "visible";
    selectedVisual.src = `media/issue_${issue}.png`;
    selectedVisual.alt = `Selected cover`;
    link.download = `media/issue_${issue}.png`;
    link.href = `media/issue_${issue}.png`;
    captions.innerText = `Issue #${issue}`;
  });

  mainGallery.appendChild(cover); //append images, captions and download buttons at once, into (gallery) contaoner.
  //mainGallery.appendChild(caption);
  //modal.appendChild(link);
});

modal.addEventListener("click", () => {
  modal.style.visibility = "hidden";
  modal.src = "";
  modal.alt = "";
});

//needs image optimization.
