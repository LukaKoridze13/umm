const change = document.getElementById("change");
const user = document.getElementById("user");
const guest = document.getElementById("guest");
const input = document.getElementById("input");

change.addEventListener("click", () => {
  change.classList.add("fa-spin");
  setTimeout(changeGuest, 800);
});

user.addEventListener("click", () => {
  input.click();
});

input.addEventListener("change", (event) => {
  const file = event.target.files[0];

  if (file) {
    const imageURL = URL.createObjectURL(file);
    user.style.backgroundImage = `url(${imageURL})`;
  }
});

function changeGuest() {
  const randomImageNumber = Math.floor(Math.random() * 1000) + 1;
  const randomImageUrl = `https://picsum.photos/200?random=${randomImageNumber}`;
  change.classList.remove("fa-spin");
  guest.style.backgroundImage = `url(${randomImageUrl})`;
}
