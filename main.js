// 1. Przypisz zdarzenie mouseenter do wszystkich przekazanych elementów.
// 2. Po najechaniu na element, odczytaj jego pozycje na stronie.
// 3. Stwórz dynamicznie element tooltop.
// 4. Wypozycjonuj element tooltip w odpowiednim miejscu i wstaw go na stronę. 
// 5. Przypisz zdarzenie mouseleave do wszystkich przekazanych elementów. 
// 6. Po zjechaniu z elementu, usuń tooltip ze strony. 
// 7. Zamknij kod w module. 

function createTooltip(text) {
    const tooltip = document.createElement("div");

    tooltip.className = "tooltip hidden";
    tooltip.textContent = text;



    document.body.append(tooltip);

    tooltip.classList.remove("hidden");
}

function showTooltip(e) {
    const pos = e.currentTarget.getBoundingClientRect();

    const text = e.currentTarget.getAttribute("title");

    createTooltip(text);
}

function init(elems) {
    for(let elem of elems) {
        elem.addEventListener("mouseenter", showTooltip);
    }
}

init(document.querySelectorAll("[title]"));