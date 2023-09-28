const submit = document.getElementById("submit-form");
submit.addEventListener("click", function (event) {
  event.preventDefault();
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const numberError = document.getElementById("number-error");
  const commentError = document.getElementById("comment-error");

  const name = document.getElementById("your-name").value;
  const email = document.getElementById("your-email").value;
  const number = document.getElementById("your-number").value;
  const comment = document.getElementById("your-comment").value;

  if (!name) nameError.innerText = "Nama tidak boleh kosong!";
  else nameError.innerText = "";

  if (!email) emailError.innerText = "Email tidak boleh kosong!";
  else emailError.innerText = "";

  if (!number) numberError.innerText = "Nomor HP tidak boleh kosong!";
  else numberError.innerText = "";

  if (!comment) commentError.innerText = "Komentar tidak boleh kosong!";
  else commentError.innerText = "";
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}
