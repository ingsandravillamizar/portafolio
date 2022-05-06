let listSubProyectos = document.querySelectorAll('.lista-subproyectos li');
let body = document.querySelector('body')

listSubProyectos.forEach((list) =>{
    list.addEventListener('mouseenter',backgroundChange)
})

function backgroundChange(e){

    //console.log(e.target.parentNode)

    switch(e.target.id){
        case 'portafolio':
            toChange(e,e.target.id);
            break;

        case 'pos':
            toChange(e,e.target.id);
            break;

        case 'call':
            toChange(e,e.target.id);
            break;

        case 'celfrio':
            toChange(e,e.target.id);
            break;

        case 'traceplus':
            toChange(e,e.target.id);
            break;

        case 'etiquetado':
            toChange(e,e.target.id);
            break;

        case 'predios':
            toChange(e,e.target.id);
            break;

        
        
    }

}

function toChange(e,name){
    console.log(e.target.parentNode)
    console.log(name)

    console.log(`url('../images/${name}.jpg')`)

    e.target.parentNode.style.backgroundImage = `url('./images/${name}.jpg')`;

}