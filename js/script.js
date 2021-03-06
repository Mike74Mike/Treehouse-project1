/**
* @file This is a file of a random quote Generator
*@author Ikey Mikey
*/
/**
* @name myArray
* @description - This documents quotes and their sources
*/
const quotes = [
  {
    quote:"I'll be back",
    source: "Arnold Schwarzenegger",
    citation: " The Terminator",
    tag: "Movie",
    year: 1984
},
{
  quote:"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  source: "Dr. Seuss",
  tag: "Dreams",
  year: 1986
},
{
quote: "Without music, life would be a mistake",
source: " Friedrich Nietzsche",
tag:"Music",
year:1888
},
{
  quote: "It is our choices, Harry, that show what we truly are, far more than our abilities.",
  source:"J.K. Rowling",
  citation: "Harry Potter and the Chamber of Secrets",
  tag:"Abilities",
  year:1998
},
{
  quote:"Life is like riding a bicycle. To keep your balance, you must keep moving.",
  source: "Albert Einstein",
  tag:"Life",
  year: 1943
}
//End of Array

]
/**@function getRandomNumber()
* @description - Gives a random Array value
*/
function getRandomQuote(){
  let quote1 = Math.floor(Math.random() * quotes.length);
  return quotes[quote1]
}
//End of Function

/**
* @function printQuote()
* @description- This outputs HTML Text if the quote
*/
function printQuote(){

  const quote = getRandomQuote();
  let html=''
  if(quote.citation){

    html += document.querySelector('p').innerHTML =
   `<p class="quote">${quote.quote}</p>
   <p class="source">
     ${quote.source}, <i><span class="citation">${quote.citation}</span></i>,  <span class="year">${quote.year}</span> [${quote.tag}]
    </p>`;
  }else {

    html += document.querySelector('p').innerHTML =
 `<p class = "quote">${quote.quote}</p>
 <p class="source">

  ${quote.source}, ${quote.year} [${quote.tag}]

 </p> `;
}
  return html;
}
// End of function


printQuote()
/**
* @function getRandomColor()
* @description- This changes the color using rgb
*/
function getRandomColor(){
  let i = Math.floor(Math.random() * 256);
  document.getElementById('container')
  document.body.style.backgroundColor = `rgb(182 , ${i} , ${i} )`;
}
//End of function

/**
* @setInterval -This was just me trying to do extra credit
*/
setInterval(function(){ printQuote() ; }, 10000);

/**
*@description -These two statements chang the background color and quote
*/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('load-quote').addEventListener("click", getRandomColor, false);
getRandomColor()
