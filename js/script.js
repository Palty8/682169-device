
 const contactsButton = document.querySelector(".contacts-button");
const formPopup = document.querySelector(".modal-write-us"); 
const close = document.querySelector(".modal-close");
const form = document.querySelector(".write-us");
const name = formPopup.querySelector("[name=name]");
const email = formPopup.querySelector("[name=email]");
const textarea = formPopup.querySelector("[name=text]");

contactsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  formPopup.classList.add("modal-show");
  name.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  formPopup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value || !textarea.value) {
  evt.preventDefault();
  console.log('Заполни все поля')
  } else {
    localStorage.setItem("name", name.value);
  }
});

