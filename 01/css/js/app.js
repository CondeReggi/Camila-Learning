const items = document.querySelectorAll('.items');

const changecolor = (element) => {
    let color = '#'
    color = color + Math.random().toString(16).toUpperCase().slice(2,8);

    if ( element.classList.contains('grid-item3') ){
        element.childNodes[1].style.color = '#' + Math.random().toString(16).toUpperCase().slice(2,8)
    }

    element.style.backgroundColor = color;
}

items.forEach( e => e.addEventListener('click', () => changecolor(e)))
