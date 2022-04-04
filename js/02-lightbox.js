import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryItemsEl = document.querySelector(".gallery");
const selectorGallery = (images) => {
  return images
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" title = "${description}" />
        </a></li>`;
    })
    .join("");
};
const cardImagesMarkup = selectorGallery(galleryItems);
galleryItemsEl.insertAdjacentHTML("afterbegin", cardImagesMarkup);
galleryItemsEl.addEventListener("click", onPictureClick);
const lightbox = new SimpleLightbox(".gallery a", { captionDelay: 250 });
function onPictureClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  lightbox();
}
console.log(galleryItems);
