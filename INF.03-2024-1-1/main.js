function changeColor() {
    const image = document.querySelector(".car");
    const color = document.querySelector("#color");
    image.src = `${color.value}.png`;
    changePrice();
}

function changePrice() {
    const color = document.querySelector("#color");
    const felgiAluminiowe = document.querySelector("#aluminiowe");
    const doposazenieCzujnikiParkowania = document.querySelector("#czujniki-parkowania");
    const doposazenieClimatronic = document.querySelector("#climatronic");
    const doposazenieNawigacja = document.querySelector("#nawigacja");
    const wycenaElement = document.querySelector(".wycena");

    let wycena = 75000;

    wycenaElement.innerHTML = `Cena bazowa: ${wycena} zł`;

    if (color.value != "szary") {
        const cena = 9000;
        wycena += cena;
        wycenaElement.innerHTML += `<br>Lakier: ${cena} zł`;
    }

    if (felgiAluminiowe.checked) {
        const cena = 7000;
        wycena += cena;
        wycenaElement.innerHTML += `<br>Felgi aluminiowe: ${cena} zł`;
    }

    if (doposazenieCzujnikiParkowania.checked) {
        const cena = 6500;
        wycena += cena;
        wycenaElement.innerHTML += `<br>Czujniki parkowania: ${cena} zł`;
    }

    if (doposazenieClimatronic.checked) {
        const cena = 8500;
        wycena += cena;
        wycenaElement.innerHTML += `<br>Climatronic: ${cena} zł`;
    }

    if (doposazenieNawigacja.checked) {
        const cena = 5000;
        wycena += cena;
        wycenaElement.innerHTML += `<br>Nawigacja: ${cena} zł`;
    }

    wycenaElement.innerHTML += `<hr><b>RAZEM: ${wycena} zł</b>`;
}