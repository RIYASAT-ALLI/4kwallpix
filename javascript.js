const search = document.getElementById("search");
const wallpapers = document.querySelectorAll(".wallpaper");
const buttons = document.querySelectorAll(".cat-btn");

// Search functionality
search.addEventListener("keyup", () => {
  let value = search.value.toLowerCase();
  wallpapers.forEach(wallpaper => {
    let category = wallpaper.className.toLowerCase();
    wallpaper.style.display = category.includes(value) ? "block" : "none";
  });
});

// Filter by category
function filterWallpapers(category) {
  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  wallpapers.forEach(wallpaper => {
    if (category === "all" || wallpaper.classList.contains(category)) {
      wallpaper.style.display = "block";
    } else {
      wallpaper.style.display = "none";
    }
  });
}
function openPage(file) {
  window.location.href = file; // same tab me open
  // window.open(file, '_blank'); // new tab me open
}
