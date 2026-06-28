window.addEventListener("scroll", function () {

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let position = card.getBoundingClientRect().top;

        let screenPosition = window.innerHeight / 1.2;

        if(position < screenPosition){

            card.style.opacity="1";
            card.style.transform="translateY(0px)";

        }

    });

});
