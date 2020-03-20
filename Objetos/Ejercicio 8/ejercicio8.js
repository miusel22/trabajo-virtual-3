const body = document.querySelector('body');
const button = document.querySelector('button');
const select = document.querySelector('.select');
const text = document.querySelector('.emoji');


button.addEventListener('onClick', update);

function update(){
    if (Math.floor(Math.random()*100) % 2 == 0) {
        body.classList.add('yellow');
        body.classList.remove('orange');
    }
    else {
        body.classList.add('orange');
        body.classList.remove('yellow')
    }
}
