const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
},
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
   
});

window.addEventListener("DOMContentLoaded", ()=>{
    AOS.init({
       
        duration: 2000, 
        once: true, 
        
      });
      
})

const partnersSwiper = new Swiper('.mySwiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
},
    slidesPerView: 4, // Nombre de slides visibles
    navigation: {
        nextEl: '.mySwiper-button-next',
        prevEl: '.mySwiper-button-prev',
    },
    pagination: {
        el: '.mySwiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // Responsive settings
        1024: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        },
    },
});


// Banner slide

const swiper2 = new Swiper('.swiper-container', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
},
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next-branches',
        prevEl: '.swiper-button-prev-branches',
    },
    pagination: {
        el: '.swiper-pagination-branches',
        clickable: true,
    },
    breakpoints: {
        // Responsive settings
        1024: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        },
    },
   
});

// Projets

document.getElementById('activityFilter').addEventListener('change', function () {
    const filterValue = this.value;
    const cards = document.querySelectorAll('.activity-card');

    cards.forEach(card => {
        if (filterValue === 'all' || card.dataset.category === filterValue) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});


