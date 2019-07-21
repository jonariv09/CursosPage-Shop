let iconoIntermitente = document.getElementById("icono-terminal-text");


// let change = true;
// Esto genera un parpadeo en el icono de terminal;
// Es una opcion alternativa al aniamtion de css
// setInterval(() => {
//     if (change) {
//         iconoIntermitente.style.opacity = 0;
//         change = false;
//     }
//     else {
//         iconoIntermitente.style.opacity = 1;
//         change = true;
//     }

// }, 300);


/** Aparicion de las card de cursos */
// Seleccion de todas las card de los cursos
const cursos = Array.from(document.querySelectorAll("#course"));
const scrollTopPositionCourso = cursos.map(course =>
    (course.getBoundingClientRect().top - innerHeight) + (innerHeight / 10));
const sectionTestimonial = document.getElementById("section-testimonial");
const scrollTopPositionTestimonial = ((sectionTestimonial.getBoundingClientRect().top - innerHeight) + (innerHeight - 200));

// Aqui estan las operaciones para manejar los scroll
window.addEventListener('scroll', () => {
    scrollTopPositionCourso.map((coordcurso, i) => {
        if (scrollY >= coordcurso) {
            cursos[i].classList.add('animate');
        }
    });

    if (scrollY >= scrollTopPositionTestimonial) {
        console.log(scrollY);
        console.log(scrollTopPositionTestimonial);
        sectionTestimonial.classList.add('animar-texto');

    }
});



