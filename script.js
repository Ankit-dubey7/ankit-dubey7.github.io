// Scroll Animation

const cards = document.querySelectorAll(".experience-card, .project-card, .skill-card");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            card.classList.add("show");

        }

    });

});
