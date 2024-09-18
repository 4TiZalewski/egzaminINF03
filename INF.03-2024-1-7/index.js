function run() {
    const display = document.querySelector(".display");
    const peeling = document.querySelector("#peeling");
    const maska = document.querySelector("#maska");
    const masaz_twarzy = document.querySelector("#masaz-twarzy");
    const makijaz = document.querySelector("#makijaz");

    let suma = 0;
    if (peeling.checked) { suma += 45; }
    if (maska.checked) { suma += 30; }
    if (masaz_twarzy.checked) { suma += 20; }
    if (makijaz.checked) { suma += 50; }

    display.textContent = `Cena zabiegów: ${suma}`;
}