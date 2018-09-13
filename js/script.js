
const contactsButton = document.querySelector(".contacts-button");
const popup = document.querySelector(".modal-write-us"); 
const close = document.querySelector(".modal-close");
const form = document.querySelector(".write-us");
const name = popup.querySelector("[name=name]");
const email = popup.querySelector("[name=email]");
const textarea = popup.querySelector("[name=text]");

const storageName = localStorage.getItem("name");
const storageEmail = localStorage.getItem("email");
const storageText = localStorage.getItem("text");

contactsButton.addEventListener("click", function (evt) {
  evt.preventDefault(); 
  popup.classList.add("modal-show");
  name.focus();
  if (storageName) {
    name.value = storageName;
  }
  if (storageEmail) {
    email.value = storageEmail;  
  }
  if (storageText) {
    text.value = storageText;
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value || !textarea.value) {
  evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal-error");
  } 
  if (name.value === "") {
    name.style.backgroundColor = '#f6dada';
  } else {
    name.style.backgroundColor = '#eaeaea';
  }
  if (email.value === "") {
    email.style.backgroundColor = '#f6dada';
  } else {
    email.style.backgroundColor = '#eaeaea';
  }
  if (textarea.value === "") {
    textarea.style.backgroundColor = '#f6dada';
  } else {
    textarea.style.backgroundColor = '#eaeaea';
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});


const mapLink = document.querySelector(".map-link");
const mapPopup = document.querySelector(".modal-map"); 
const mapClose = document.querySelector(".modal-map .modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-map-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-map-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-map-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-map-show");
    }
  }
});
