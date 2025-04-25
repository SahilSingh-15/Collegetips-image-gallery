document.addEventListener("DOMContentLoaded", () => {
  const prevBtns = document.querySelectorAll(".prev-btn");
  const nextBtns = document.querySelectorAll(".next-btn");
  const carouselTracks = document.querySelectorAll(".carousel-track");

  prevBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      moveCarousel(index, "prev");
    });
  });

  nextBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      moveCarousel(index, "next");
    });
  });

  // Function to move the carousel track
  function moveCarousel(index, direction) {
    const carouselTrack = carouselTracks[index];
    const currentTransform = parseInt(getComputedStyle(carouselTrack).transform.split(",")[4] || 0);

    let newTransform = 0;

    // If moving next, shift the track left, otherwise shift right
    if (direction === "next") {
      newTransform = currentTransform - (carouselTrack.children[0].clientWidth + 10); // Adding margin space
    } else if (direction === "prev") {
      newTransform = currentTransform + (carouselTrack.children[0].clientWidth + 10);
    }

    carouselTrack.style.transform = `translateX(${newTransform}px)`;
  }
});
