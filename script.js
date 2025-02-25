function changeImage(imageSrc) {
    document.getElementById("mainImage").src = imageSrc;
}

// impede o menu de clique direito/pressionar nas imagens que tem a classe "no-right-click"
document.addEventListener("contextmenu", function (event) {
    if (event.target.classList.contains("no-right-click")) {
      event.preventDefault();
    }
});