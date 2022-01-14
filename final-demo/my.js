const menu = document.querySelector(".menu"),
    nav = document.querySelector(".nav"),
    vedio = document.getElementById("vedio-A"),
    ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 450;
let mover = (50 / 100)

function animate() {
    ctx.fillStyle = '#161616'
    ctx.fillRect(0, 0, cnv.width, cnv.height)
    ctx.beginPath();
    ctx.moveTo(0, cnv.height / 2);
    for (let i = 0; i < cnv.width; i++) {
        ctx.lineTo(i, 250 / 1 +
            Math.sin(i * (-6 / 1000) + mover) * 50);
    }
    ctx.strokeStyle = `#161616`
    ctx.lineTo(cnv.width, cnv.height)
    ctx.lineTo(0, cnv.height)
    ctx.fillStyle = `#e51e2e`
    ctx.fill()
    ctx.stroke()
    mover -= 0.04;
    requestAnimationFrame(animate)
}
animate();

// import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 25,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

function toggleMenu() {
    menu.classList.toggle('active')
    nav.classList.toggle('active')
}
function vedioOver() {
    vedio.style.display = 'none'
}
function vedioPlay() {
    vedio.style.display = 'flex'
}