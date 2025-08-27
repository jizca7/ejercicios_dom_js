//1.1
const btn = document.getElementById('btnToClick');
btn.addEventListener('click', function(event) {
console.log('Click event:', event);
});
//1.2
const inputFocus = document.querySelector('.focus');
inputFocus.addEventListener('focus', function() {
console.log('Valor al tomar foco:', inputFocus.value);
});
//1.3
const inputValue = document.querySelector('.value');
inputValue.addEventListener('input', function() {
console.log('Valor actual del input:', inputValue.value);
});

const albums = [
"De Mysteriis Dom Sathanas",
"Reign of Blood",
"Ride the Lightning",
"Painkiller",
"Iron Fist"
];

const ul = document.createElement('ul');

for (const album of albums) {
const li = document.createElement('li');
li.textContent = album;
ul.appendChild(li);
}

document.body.appendChild(ul);
