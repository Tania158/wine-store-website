const colours = [
  "#eba26bcc",
  "#923f09cc",
  "#3c6028cc",
  "#080607cc",
  "#315460cc",
  "#b0dfc8cc",
];
const galleryEventsDemo = document.getElementById("custom-events-demo");

galleryEventsDemo.addEventListener("lgBeforeSlide", (event) => {
  const { index } = event.detail;
  document.querySelector(".lg-backdrop").style.backgroundColor = colours[index];
});

lightGallery(galleryEventsDemo, {
  addClass: "lg-events-demo-outer", // (Optional)
});
