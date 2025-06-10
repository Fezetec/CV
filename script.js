// Enkel smooth scroll for navigasjonslenkene
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    var headerOffset = 45;
    var elementPosition = section.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    //section.scrollIntoView({ behavior: 'smooth' });
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
  });
});
