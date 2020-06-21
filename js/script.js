var writeLink = document.querySelector(".btn-write-us");
var writePopup = document.querySelector(".contact-form-container");
var writeClose = writePopup.querySelector(".contact-form-close");
var writeName = writePopup.querySelector(".contact-form-login");
var writeMail = writePopup.querySelector(".contact-form-mail");
var writeText = writePopup.querySelector(".contact-form-message");
var writeForm = writePopup.querySelector(".contact-form");

var isStorageSupport = true;
var storage = "";
var storage2 = "";

try {
  storage = localStorage.getItem("login");
  storage2 = localStorage.getItem("mail");
} catch (err) {
  isStorageSupport = false;
}

writeLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    writePopup.classList.add("contact-form-container-show");
    writePopup.classList.add("contact-form-container-show");
    if(storage || storage2) {
        writeName.value = storage;
        writeMail.value = storage2;
        writeText.focus();
    }
    else if (storage) {
        writeName.value = storage;
        writeMail.focus();
      }
    else {
        writeName.focus();
    }
    writeText.value = "";
});

writeClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    writePopup.classList.remove("contact-form-container-show");
    writePopup.classList.remove("contact-form-container-error");
});
  
writeForm.addEventListener("submit", function (evt) {
    if (!writeName.value || !writeMail.value || !writeText.value) {
        evt.preventDefault();
        writePopup.classList.remove("contact-form-container-error");
        writePopup.offsetWidth = writePopup.offsetWidth;
        writePopup.classList.add("contact-form-container-error");
    }
    else {
        if (isStorageSupport) {
            localStorage.setItem("login", writeName.value);
            localStorage.setItem("mail", writeMail.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (writePopup.classList.contains("contact-form-container-show")) {
        evt.preventDefault();
        writePopup.classList.remove("contact-form-container-show");
        writePopup.classList.remove("contact-form-container-error");
      }
    }
});