
/*function createAccount(user, generatePassword) {
  const password = generatePassword(9); // volání funkce generatePassword s délkou hesla 9
  return `Uživatel: ${user}, heslo: ${password}`;
} 

// Vytvoření účtu s náhodně generovaným heslem
console.log(createAccount('Jan Novák', generatePassword)); */

// Vytvoření účtu s jiným generátorem hesel
const generateStrongPassword = (length) =>{
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
//Konkrétně řetězec obsahuje velká a malá písmena, 
//číslice a několik speciálních znaků, které se obvykle používají v heslech.
//Každý znak v řetězci je kódován pomocí kódování Unicode, což umožňuje použití více než jen základní sady ASCII znaků. 
let password = '';
//Tato proměnná se používá pro ukládání postupně generovaného hesla v rámci cyklu for v funkci generatePassword. 
//for (inicilizace; podmínka; iterace) {
  // kód, který se má opakovat}, 
  //Proměnná i je inicializována na hodnotu 0, podmínka cyklu i < length je pravdivá, 
  //dokud je i menší než length (v tomto případě délka hesla) 
  //a iterace i++ zvyšuje hodnotu i o 1 po každém provedení cyklu.
  //Takže tato smyčka opakuje kód uvnitř těla cyklu, dokud je podmínka pravdivá.
 
  for (let i = 0; i < length; i++) {
    // //Vytvoří náhodný index mezi 0 a characters.length - 1, 
    //vrací celkový počet znaků, které jsou v řetězci characters. Tento počet je použit při generování náhodného indexu,
    // který se používá k výběru náhodného znaku ze řetězce characters.
    //generuje mi index od 0 po 74 co je dlzka characters(ta ma 74 znakov), ak mi vygeneruje 54 to znamena ide si pre 
    //poziciu 54 v characters a prida ju do indexu, ak je index co je teraz +1, i=1 co je menej ako 9, takze mi to 
    //opakuje cyklus, ak bude i vacsi cyklus sa zastavi
    const randomIndex = Math.floor(Math.random() * characters.length);
    //Operátor += je zkrácený zápis pro password = password + characters[randomIndex], 
    //což znamená, že se na konec řetězce password přidá náhodně vybraný znak z řetězce characters.
    //Takže výraz characters[randomIndex] vybere náhodně jeden znak z řetězce characters 
    //na základě náhodně vygenerovaného indexu randomIndex.
    password += characters[randomIndex];
  }
  return password;
}


//console.log(createAccount('Anna Hrušková', generateStrongPassword)); // vytvoří účet s jiným generátorem hesel


/*const createAccount = (user, generatePassword) => {
	return `Uživatel ${user} s heslem ${generatePassword(9)}`
} */


const createAccount = (user, generateStrongPassword) => {
  return account=document.body.innerHTML +=`<p>Vitaj ${user}, tvoje heslo k uctu je ${generateStrongPassword(length)}<p>`
}
