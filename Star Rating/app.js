
const stars = document.querySelectorAll(".star");

stars.forEach((star, i) => {
  star.onclick = function() {
    let currStar = i;

    stars.forEach((star, j) => {
      if (currStar >= j) {
        star.innerHTML = '&#9733';
      } else {
        star.innerHTML = '&#9733';
      }
    })
  }
})