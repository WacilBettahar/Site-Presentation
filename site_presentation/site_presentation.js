window.addEventListener('scroll', () => {
    const sectionInView = Array.of(...document.querySelectorAll('main > section'))
        .map((section, idx) => ({section, idx}))
        .find(({section}) => {
            const rect = section.getBoundingClientRect();
            const top = rect.top;
            const bottom = rect.bottom;
            return top < 100 && bottom > 100;
        });
    if (!sectionInView) {
        return;
    }
    const {idx} = sectionInView;
    const header = document.querySelector('header');
    header.classList.toggle('header--blue', idx % 2 !== 0);
});

window.addEventListener('scroll', function(){
    const header =document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0 );
});

var slide = new Array("foot.jpg", "basil.png");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}

setInterval("ChangeSlide(1)", 4000);

const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal(){
  modalContainer.classList.toggle("active")
}