const headerBurger = document.querySelector('.header__burger'),
      headerMenu = document.querySelector('.header__menu'),
      body = document.getElementsByTagName('body')[0];

headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('header__burger_active')
    headerMenu.classList.toggle('header__menu_active')
    body.classList.toggle('hide-scroll')
    
})

$('#feedback-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: $('.button-prev'),
    nextArrow: $('.button-next'),
})