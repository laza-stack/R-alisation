const images = document.querySelectorAll(".photo-card img");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;


/* =========================
   OUVRIR UNE IMAGE
========================= */

function openLightbox(index) {

    currentIndex = index;

    lightboxImage.src = images[currentIndex].src;
    lightboxImage.alt = images[currentIndex].alt;

    lightbox.classList.add("active");

    document.body.classList.add("no-scroll");
}


/* =========================
   FERMER
========================= */

function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.classList.remove("no-scroll");

}


/* =========================
   IMAGE SUIVANTE
========================= */

function nextImage() {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    lightboxImage.src = images[currentIndex].src;
    lightboxImage.alt = images[currentIndex].alt;

}


/* =========================
   IMAGE PRÉCÉDENTE
========================= */

function previousImage() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    lightboxImage.src = images[currentIndex].src;
    lightboxImage.alt = images[currentIndex].alt;

}


/* =========================
   CLIC SUR LES PHOTOS
========================= */

images.forEach((image, index) => {

    image.addEventListener("click", () => {

        openLightbox(index);

    });

});


/* =========================
   BOUTONS
========================= */

closeBtn.addEventListener("click", closeLightbox);

nextBtn.addEventListener("click", nextImage);

prevBtn.addEventListener("click", previousImage);


/* =========================
   CLIC À CÔTÉ DE L'IMAGE
========================= */

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        closeLightbox();

    }

});


/* =========================
   CLAVIER
========================= */

document.addEventListener("keydown", (event) => {

    if (!lightbox.classList.contains("active")) {
        return;
    }

    if (event.key === "Escape") {

        closeLightbox();

    }

    if (event.key === "ArrowRight") {

        nextImage();

    }

    if (event.key === "ArrowLeft") {

        previousImage();

    }

});
