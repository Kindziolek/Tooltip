// 1. Przypisz zdarzenie mouseenter do wszystkich przekazanych elementów.
// 2. Po najechaniu na element, odczytaj jego pozycje na stronie.
// 3. Stwórz dynamicznie element tooltop.
// 4. Wypozycjonuj element tooltip w odpowiednim miejscu i wstaw go na stronę. 
// 5. Przypisz zdarzenie mouseleave do wszystkich przekazanych elementów. 
// 6. Po zjechaniu z elementu, usuń tooltip ze strony. 
// 7. Zamknij kod w module. 

function showTooltip(e) {
    console.log(e);
}

function init(elems) {
    for(let elem of elems) {
        elem.addEventListener("mouseenter", showTooltip);
    }
}

init(document.querySelectorAll("[title]"));