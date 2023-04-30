/*    jQueary code
$(".hamburger-section").click(function() {
    $(".navbar").toggleClass("active");
    $(this).toggleClass("active");
});*/

//  using javascript hamberger menu

const hambergersection = document.querySelector('.hamburger-section');

const hamberger = document.querySelector('.hamburger');

const navbar = document.querySelector('.navbar')

hambergersection.addEventListener('click' , () => {
    hambergersection.classList.toggle('active')
    navbar.classList.toggle('active')
})

//    form valiadtion code 

