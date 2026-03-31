// ZADANIE 1

const element = document.createElement("div");
const body = document.querySelector("body");
body.appendChild(element);
element.textContent = "div"

// ZADANIE 2

const h1 = document.querySelector("h1");
h1.style.color = "red";

// ZADANIE 3

const img = document.querySelector("img");
img.dataset.src = "nowy obraz"

// ZADANIE 4

const p = document.querySelector("p");
p.hidden = true;

// ZADANIE 5

element.classList.add("xd");

// ZADANIE 6

const ul = document.querySelector("ul");
ul.classList.remove("active")


// ZADANIE 7

const t_button = document.querySelector("button");
t_button.textContent = "Przycisk!";

// ZADANIE 8

const input = document.querySelector("input");
input.value = ""

// ZADANIE 9

const newli = document.createElement("li");
newli.textContent = "Siemka!";
ul.appendChild(newli);

// ZADANIE 10

// body.style.backgroundColor = "blue";

// ZADANIE 11

const newDiv = document.querySelector('div');
newDiv.classList.add('new-div');
const header = document.querySelector('header');
header.appendChild(newDiv);

// ZADANIE 12

const headers = document.querySelectorAll('h1');
if (headers.length > 1) {
  headers[1].style.color = 'green';
}

// ZADANIE 13

const image = document.querySelector('img');
image.dataset.src = 'newImage.jpg';
image.removeAttribute('src');

// ZADANIE 14

const paragraphs = document.querySelectorAll('p');
for (let i = 1; i < paragraphs.length; i += 2) {
  paragraphs[i].style.display = 'none';
}

// ZADANIE 15

const listItems = document.querySelectorAll('li');
if (listItems.length >= 3) {
  const thirdListItem = listItems[3];
  thirdListItem.classList.add('selected');
}

// ZADANIE 16

function addElement() {
  var list = document.querySelector('details > ul');
  var newItem = document.createElement('li');
  newItem.itemContent = 'Nowy element';
  list.insertBefore(newItem, list.firstChild);
}

// ZADANIE 17

function removeElements() {
  var listItems = document.querySelectorAll('header > div > ul > li');
  for (var i = 0; i < listItems.length; i += 2) {
    listItems[i].remove();
  }
}

// ZADANIE 18

function addParagraph(event) {
  event.preventDefault();
  var text = document.querySelector('#newParagraph').value;
  var newParagraph = document.createElement('p');
  newParagraph.textContent = text;
  document.querySelector('section').appendChild(newParagraph);
  var reset = document.querySelector('#newParagraph').value = "";
}

// ZADANIE 19

const tekst = document.querySelector(".title");
tekst.textContent = "DOM TRANING Arena";

// ZADANIE 20

const cos = document.querySelector(".nav-item a")
cos.textContent("Start")

// ZADANIE 21

const cos2 = document.querySelectorAll(".menu-list li");
for (let yo of cos2){
  console.log(yo.textContent)
}

// ZADANIE 22

const ok = document.querySelector(".card.highlight")
ok.classList.add("active")

// ZADANIE 23

const costam = document.querySelector(".card .card-header")
costam.textContent = "Zmieniona karta"

// ZADANIA 24

const karta = document.querySelector("details > .info-text")
karta.textContent = "tekst"

// ZADANIE 25

const input = document.querySelector("input[name= 'name']")
input.value = "Jan"

// ZADANIE 26

const sel = document.querySelector(".select")
sel.value = "de"

// ZADANIE 27

const checkboxix = document.querySelector(".checkbox")
checkboxix.checked = true;

// ZADANIE 28

const zadanie = document.querySelector(".deep-text")
zadanie.classList.add("highlight")

// ZADANIE 29

const li = document.createElement("li");
const dynamiczna = document.querySelector("#dynamic-list")
li.textContent = "Nowy element"
dynamiczna.appendChild(li)

// ZADANIE 30

const li = document.querySelector(".menu-list")

for (let i = 0; i < 3; i += 1) {
  const element = document.createElement("li")
  const l = i + 4
  element.textContent = "Item " + l
  li.appendChild(element)
}

// ZADANIE 31

const div = document.createElement("div")
div.classList.add("card")
const karty = document.querySelector(".cards-section")
karty.appendChild(div)

// ZADANIE 32

const box = document.querySelector(".box")
const boxrodzic = document.querySelector(".boxes-container")

boxrodzic.appendChild(box)

// ZADANIE 33

const rodzic = document.querySelector(".dynamic-area")
const p = document.createElement("p")
p.textContent = "siema"

rodzic.appendChild(p)

// ZADANIE 34

const box1 = document.querySelector(".box")
box1.textContent = "Box 0"
const rodzicc = document.querySelector("#insertion-container")

rodzicc.prepend(box1)

// ZADANIE 35

const listek = document.createElement("li")
listek.textContent = "lista"
const rodzicc1 = document.querySelector("#dynamic-list")

rodzicc1.prepend(listek)

// ZADANIE 36