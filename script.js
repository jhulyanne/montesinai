document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;

    const changeImage = () => {
        const currentImage = images[currentIndex];
        const nextIndex = (currentIndex + 1) % images.length;
        const nextImage = images[nextIndex];

        // Adiciona as classes de transição
        currentImage.classList.remove('active');
        currentImage.classList.add('prev');
        nextImage.classList.add('active');

        // Remove a classe "prev" após a transição
        setTimeout(() => {
            currentImage.classList.remove('prev');
        }, 1000);

        // Atualiza o índice
        currentIndex = nextIndex;
    };

    // Troca a imagem a cada 5 segundos
    setInterval(changeImage, 5000);
});
