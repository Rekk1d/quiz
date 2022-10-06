const headerBurger = document.querySelector('.header__burger'),
      headerMenu = document.querySelector('.header__menu');

headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('header__burger_active')
    headerMenu.classList.toggle('header__menu_active')
})
