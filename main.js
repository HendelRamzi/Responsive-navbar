const menu_open = document.getElementById('menu__open');
const menu_close = document.getElementById('menu__close');

const cart = document.getElementById('cart');


const navigation = document.getElementById('navigation')
const navigation__content = document.getElementById('navigation__content')


menu_open.addEventListener('click', (event) => {
    event.preventDefault()
    navigation.classList.remove('hidden');
    navigation__content.classList.add('dark')
    menu_open.classList.add('hidden');
    menu_close.classList.remove('hidden');

    cart.classList.add('hidden')
})

menu_close.addEventListener('click', event => {
    event.preventDefault()
    navigation.classList.add('hidden');
    navigation__content.classList.remove('dark')
    menu_open.classList.remove('hidden');
    menu_close.classList.add('hidden')

    cart.classList.remove('hidden')
})