//casovace a zpozdeni 

/*const timeIsUp = () => {
    document.body.innerHTML += '<p>Vas cas vyprsel!</p>'

}*/

//v javascripte uz mame funkci setTimeOut, ma tam parametr milisekundy
//timeIsUp - je funkce vyssiho radu 
//setTimeout(timeIsUp, 5000)

//setInterval je funkce kde volam fuknci po urcitom case 
//chceme aby sa kazdu sekundu volala fuknce s Vas cas vyprsel 
// po 5tej sekunde sa mi vola opat fuknce  setTimeout(timeIsUp, 5000), lebo to mame definovane hore 
//kdyz mam nejkay odpocet, 
//setInterval(timeIsUp, 1000)

//chceme odpocet, 10 sekund ako countDown

function countDown() {
    //vola anonymne funkci function(), setinterval mi ji spusti a clearInterval mi je stopne ak timeLeft
    //je mensi ako 0

    let timeLeft = 10;
    //Anonymní funkce může být použita v situacích, 
    //kdy není potřeba ji opakovaně volat a ukládat do proměnné, 
    //nebo kdy je nutné funkci předat jako parametr jiné funkce.
    const timer = setInterval(function() {
      console.log(timeLeft);
      timeLeft--;
      if (timeLeft < 0) {
        clearInterval(timer);
        console.log("čas vypršel");
      }
    }, 1000);
  }

//pokial volas funkci countDown tak potrebujes tam zadat time ako parametr v pythone je to lambda funkcia 

//UDALOSTI


const changeTitle = () => {
	const h1Elm = document.querySelector('h1')
	h1Elm.textContent = 'Baf!'
}

const btnElm = document.querySelector('button')
//ak bhy si dala do eventliseneru funkciu changeTitle() tak by uz to necakalo na kliknutie 
btnElm.addEventListener('click', changeTitle)

