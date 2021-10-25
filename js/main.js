
const container = document.querySelector(".container");
// scrivere ciclo da 1 a 100

for(let square = 1; square <= 100; square++){
    let rowMarkup = '<div class="row">';
    rowMarkup += `<div class="square">${square}</div>`
    // multipli-3
    if(square % 3 ==0 ){
        rowMarkup = `<div class="square ml3">fizz</div>`
    }
    // multipli-5
    if(square % 5 ==0 ){
        rowMarkup = `<div class="square ml5">buzz</div>`
    }
    // multipli 3-5
    if( (square % 3 ==0 ) && (square % 5 ==0 ) ){
        rowMarkup = `<div class="square ml">fizz-buzz</div>`
    }

    // print in html
    rowMarkup += '</div>'
    container.innerHTML += rowMarkup
}
// individuare multipli di 3 e 5 