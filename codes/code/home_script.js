const menuBtns = document.querySelectorAll('.menu-btn');
const movieItems = document.querySelectorAll('.movie-item');

let activeBtn = "action";

showMovies(activeBtn);

menuBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    resetActiveBtn();
    showMovies(btn.id);
    btn.classList.add('active-btn');
  });
});

function resetActiveBtn() {
  menuBtns.forEach((btn) => {
    btn.classList.remove('active-btn');
  });
}

function showMovies(genre) {
  activeBtn = genre;
  movieItems.forEach((item) => {
    if (item.classList.contains(activeBtn)) {
      item.style.display = "grid";
    } else {
      item.style.display = "none";
    }
  });
}


