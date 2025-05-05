//light gallery
lightGallery(document.querySelector('.gallery'),{
    thumbnail: true,
    autoplay: true,
    autoplayControls: true,
    zoom: true,
    rotate: true,
    fullScreen: true,
    download: false,
});


// Fade section on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.1
  });
  
  document.querySelectorAll('.fade-in-section').forEach(el => {
    observer.observe(el);
  });

  
  window.addEventListener("load", function() {
    document.getElementById("loader").style.display = "none";
});

// righ reveal on scroll


document.addEventListener("scroll", function () {
    let reveals = document.querySelectorAll(".reveal");
    reveals.forEach(reveal => {
        let windowHeight = window.innerHeight;
        let elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) { // Ajuste 100 pour déclencher plus tôt ou plus tard
            reveal.classList.add("visible");
        }
    });
});


    document.addEventListener("scroll", function () {
        let reveals = document.querySelectorAll(".reveal");
        reveals.forEach(reveal => {
            let windowHeight = window.innerHeight;
            let elementTop = reveal.getBoundingClientRect().top;
            let elementBottom = reveal.getBoundingClientRect().bottom;

            if (elementTop < windowHeight - 100 && elementBottom > 0) { 
                
                reveal.classList.add("visible");
            } else {
                
                reveal.classList.remove("visible");
            }
        });
    });
