// Zpoždění a časovače


// Zpoždění
const timesIsUp = () => {
    document.body.innerHTML += '<p>Čas vypršel</p>'
}

let cislo = 0
const pricitej = () => {
    cislo += 1
    document.body.innerHTML += cislo
}

setTimeout(timesIsUp, 5000)

// Volání v intervalu

setInterval(pricitej, 10000)

/*
const mojeSuperFunkce = ()=>{
    console.log("Uběhlo 5 vteřin a zavolala se anonymní funkce")
}*/

// setTimeout(mojeSuperFunkce, 5000)

setTimeout(
    ()=>{
        console.log("Uběhlo 5 vteřin a zavolala se anonymní funkce")
    }
    /*function(){
        console.log("Uběhlo 5 vteřin a zavolala se anonymní funkce")
    }*/
    ,50000)

// druhy událostí: https://www.w3schools.com/jsref/dom_obj_event.asp 

const changeTitle = () => {
    const h1Elm = document.querySelector('h1')
    h1Elm.textContent = 'Baf!'
}

const button = document.querySelector('button')
button.addEventListener('click', changeTitle)

document.addEventListener('scroll', changeTitle)

/*
window.addEventListener('contextmenu', (ev) => {
    alert('right clicked')
});*/


// Cvičení
// https://kodim.cz/kurzy/javascript-vyuka/js-1/hof-udalosti/cv-udalosti

/*
Objednávka

Vytvoříme jednoduchou stránku s objednávacím tlačítkem.

Založte HTML stránku s jedním tlačítkem
a) <button id="btn-order">Objednat</button>

b) Doplňte do stránky JavaScriptový program, který zařídí, že po stisknutí tlačítka se do stránky za tlačítko vypíše odstavec:
<p>Objednáno</p>

c) Upravte program tak, že text se nevypíše do stránky, ale zobrazí se na samotném tlačítku.
*/

const orderBtn = document.querySelector('#btn-order')

const afterClickOrder = () => {
    //document.body.innerHTML += '<p> Objednáno </p>'
    orderBtn.textContent = 'Objednáno'
}

orderBtn.addEventListener('click', afterClickOrder)