//fajsdf

function wyslij() {
  const input = document.querySelector("#wiadomosc");
  let odpowiedz = document.createElement("section");
  odpowiedz.classList.add("wypowiedz");
  odpowiedz.classList.add("jolanta");

  let zdjecie = document.createElement("figure");
  let zdjecie_inner = document.createElement("img");
  zdjecie_inner.src = "./pliki2/Jolka.jpg";
  zdjecie_inner.alt = "Jolanta Nowak";
  zdjecie.appendChild(zdjecie_inner);

  let paragraf = document.createElement("p");
  paragraf.innerText = input.value;

  odpowiedz.appendChild(zdjecie);
  odpowiedz.appendChild(paragraf);

  const chat = document.querySelector(".chat");
  chat.appendChild(odpowiedz);

  odpowiedz.scrollIntoView();
}

const gotoweOdpowiedzi = [
  "Świetnie!",
  "Kto gra główną rolę?",
  "Lubisz filmy Tego reżysera?",
  "Będę 10 minut wcześniej",
  "Może kupimy sobie popcorn?",
  "Ja wolę Colę",
  "Zaproszę jeszcze Grześka",
  "Tydzień temu też byłem w kinie na Diunie",
  "Ja funduję bilety",
];

function losowaOdpowiedz() {
  const losowyIndex = Math.round(Math.random() * 8); // W przedziale od 0 do 8

  let odpowiedz = document.createElement("section");
  odpowiedz.classList.add("wypowiedz");
  odpowiedz.classList.add("krzysztof");

  let zdjecie = document.createElement("figure");
  let zdjecie_inner = document.createElement("img");
  zdjecie_inner.src = "./pliki2/Krzysiek.jpg";
  zdjecie_inner.alt = "Krzysztof Łukasiński";
  zdjecie.appendChild(zdjecie_inner);

  let paragraf = document.createElement("p");
  paragraf.innerText = gotoweOdpowiedzi[losowyIndex];

  odpowiedz.appendChild(zdjecie);
  odpowiedz.appendChild(paragraf);

  const chat = document.querySelector(".chat");
  chat.appendChild(odpowiedz);

  odpowiedz.scrollIntoView();
}
