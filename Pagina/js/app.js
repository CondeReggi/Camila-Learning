const menu = document.querySelector('.menu') //Agarro el chanchito

menu.addEventListener('click', () => { //Le digo al chanchito que va a hacer algo cuando le haga click
    
    //agarro la barra de navegacion, y le pregunto ? tiene cla clase responsive? si la tiene, se la saco, y si no se la pongo
    document.querySelector('.menu-navegacion').classList.toggle("responsive"); 
})