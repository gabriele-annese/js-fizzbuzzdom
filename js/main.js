
const container = document.querySelector(".container");

// scrivere ciclo da 1 a 100
// gen 10 row 

for (let square = 1; square <= 100; square++) {
    let rowMarkup = '<div class="row">';
    if( square % 3 ==  0){
        rowMarkup += `<div class="square ml3">fizz</div>`;
        rowMarkup += '</div>';
        container.innerHTML += rowMarkup;
    } else if (square % 5 == 0){
        rowMarkup += `<div class="square ml5">buzz</div>`;
        rowMarkup += '</div>';
        container.innerHTML += rowMarkup;
    } else{
        let rowMarkup = '<div class="row">';
        rowMarkup += `<div class="square">${square}</div>`;
        rowMarkup += '</div>';
        container.innerHTML += rowMarkup;
    }

}

// individuare multipli di 3 
// individuare multipli di 5
// individuare multipli di 3 e 5 