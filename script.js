document.addEventListener("DOMContentLoaded", () => {
    let prestations = Array.from(document.getElementsByClassName('prestation'));
    let currentIndex = 0; 

    function updateCarousel() {
        prestations.forEach((el, index) => {
            el.classList.remove("active", "inactiveg", "inactived");

            if (index === currentIndex) {
                el.classList.remove("inactive");
                el.classList.add("active");
                el.style.transform = "translateX(-50%) scale(1)";
                el.style.zIndex = "2";
            } else if (index === (currentIndex - 1 + prestations.length) % prestations.length) {
                el.classList.add("inactiveg"); 
                el.classList.add("inactive");
                el.style.transform = "translateX(-50%) scale(0.9)";
                el.style.zIndex = "1";
            } else if (index === (currentIndex + 1) % prestations.length) {
                el.classList.add("inactived"); 
                el.classList.add("inactive");
                el.style.transform = "translateX(50%) scale(0.9)";
                el.style.zIndex = "1";
            } else {
                el.style.transform = "translateX(0) scale(0.9)";
                el.style.zIndex = "0";
            }
        });
    }

    document.querySelector(".fleche.gauche").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + prestations.length) % prestations.length;
        updateCarousel();
    });

    document.querySelector(".fleche.droite").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % prestations.length;
        updateCarousel();
    });

    updateCarousel();
});
