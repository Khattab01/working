let shape = document.querySelector('.shape')
let man = document.querySelector('.man')

window.onscroll = function vv(){
    let value = scrollY
    man.style.right = value/4 + 'px';
    shape.style.right = value/3 + 'px';

    if(value >= 888.888916015625){
   man.style.display = 'none'
   shape.style.display = 'none'
    }else if(value < 888.888916015625){
        man.style.display = 'block'
        shape.style.display = 'block'
    }
}