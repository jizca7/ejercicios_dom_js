//1.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ulCountries = document.createElement('ul');
for (const country of countries) {
const li = document.createElement('li');
li.textContent = country;
ulCountries.appendChild(li);
}
document.body.appendChild(ulCountries);

//1.2
const removeElem = document.querySelector('.fn-remove-me');
if (removeElem) {
removeElem.remove();
}

//1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corolla'];

const ulCars = document.createElement('ul');
for (const car of cars) {
const li = document.createElement('li');
li.textContent = car;
ulCars.appendChild(li);
}

const printDiv = document.querySelector('div[data-function="printHere"]');
printDiv.appendChild(ulCars);

//1.4
const countriesDivs = [
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const country of countriesDivs) {
const div = document.createElement('div');
const h4 = document.createElement('h4');
h4.textContent = country.title;
const img = document.createElement('img');
img.src = country.imgUrl;
div.appendChild(h4);
div.appendChild(img);
document.body.appendChild(div);
}

//1.5
const buttonRemoveLast = document.createElement('button');
buttonRemoveLast.textContent = 'Eliminar último div';
document.body.appendChild(buttonRemoveLast);

buttonRemoveLast.addEventListener('click', () => {
const allDivs = document.querySelectorAll('body > div');
const lastDiv = allDivs[allDivs.length - 1];
if (lastDiv) {
    lastDiv.remove();
}
});

//1.6
for (const country of countriesDivs) {
const div = document.createElement('div');
const h4 = document.createElement('h4');
h4.textContent = country.title;
const img = document.createElement('img');
img.src = country.imgUrl;
const btnDelete = document.createElement('button');
btnDelete.textContent = 'Eliminar este div';

btnDelete.addEventListener('click', function () {
    div.remove();
});

div.appendChild(h4);
div.appendChild(img);
div.appendChild(btnDelete);
document.body.appendChild(div);
}
