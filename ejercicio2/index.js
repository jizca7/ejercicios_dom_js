//2.1
const nuevodiv = document.createElement('div');
//2.2
const nuevoP = document.createElement('p');
nuevoP.textContent = 'Nuevo P';
//2.3
const nuevodiv2 = document.createElement('div');
for (let i = 1; i <= 6; i++) {
const nuevoP = document.createElement('p');
nuevoP.textContent = 'Soy el párrafo número ' + i;
nuevoDiv.appendChild(nuevoP);
}

document.body.appendChild(nuevoDiv);
//2.4
const parrafo = document.createElement('p');

parrafo.textContent = 'Soy dinámico!';

document.body.appendChild(parrafo);
//2.5
const h2 = document.querySelector('h2.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';

//2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const listaUl = document.createElement('ul');

for (const app of apps) {
const itemLi = document.createElement('li');
itemLi.textContent = app;
listaUl.appendChild(itemLi);
}

document.body.appendChild(listaUl);
//2.7
const elementos = document.querySelectorAll('.fn-remove-me');
for (const elemento of elementos ) {
    elemento.remove();
}
//2.8
const nuevoP = document.createElement('p');
nuevoP.textContent = 'Voy en medio!';

const body = document.body;

const div = document.querySelectorAll('body > div'); 

body.insertBefore(nuevoP, divs[1]);
//2.9
const divs = document.querySelectorAll('div.fn-insert-here');

for (const div of divs) {
const nuevoP = document.createElement('p');
nuevoP.textContent = 'Voy dentro!';
div.appendChild(nuevoP);
}
