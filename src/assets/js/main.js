$('.perks_active').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoplay: true,
    nav: true,
    autoplayHoverPause: true,
    autoplaySpeed: 800,
    responsive: {

        0: {
            items: 1,

        },
        767: {
            items: 3,
        },
        992: {
            items: 4,
        },
        1200: {
            items: 4,
        },
        1500: {
            items: 4
        }
    }
})

// added
// const hamburgerBtn = document.getElementById('hamburgerBtn');


// hamburgerBtn.addEventListener('click', () => {
//     sidenav.classList.toggle('open');
// })

function toggleMenu() {
    let sidenav = document.querySelector('.sidenav');
    let toggle = document.querySelector('.sidenav');
    sidenav.classList.toggle('active');
    toggle.classList.toggle(active);
}