var imagenes = ['images/univer.jfif','images/1.jfif','images/2.jpeg','images/3.jpg'],
cont = 0;

function carrousel(card){
    card.addEventListener('click', e => {
      let atras = card.querySelector('.atras');
      adelante = card.querySelector('.adelante'),
          img = card.querySelector('img'),
    tgt = e.target;

    if(tgt == atras){
        if(cont > 0){
            img.src = imagenes[cont -1];
            cont --;
        }
        else{
            img.src = imagenes[imagenes.length - 1 ];
            cont = imagenes.length - 1;

        }

    }
    else if(tgt == adelante){
        if(cont < imagenes.length - 1){
            img.src = imagenes[cont + 1];
            cont ++;
        }
        else{
            img.src = imagenes[0];
            cont = 0;

        }

    }
   

  });  
}

document.addEventListener("DOMContentLoaded", () =>{
    let card = document.querySelector('.card');
    
    carrousel(card);
});