const vocabulary=[
    {
        english:"school",
        turkish:"okul",
    },
    {
        english:"car",
        turkish:"araba",
    },
    {
        english:"pencil",
        turkish:"kalem",
    },
    {
        english:"sky",
        turkish:"gökyüzü",
    },
    {
        english:"aligator",
        turkish:"sürüngen",
    },
    {
        english:"computer",
        turkish:"bilgisayar",
    },
    {
        english:"scarf",
        turkish:"atkı",
    },
    {
        english:"wheel",
        turkish:"tekerlek",
    },
]

//DOM
const flipcards =document.querySelector('.flipcards')


// global vars
let cardCount = vocabulary.length;

console.log(cardCount);

//create card
function createCards(cardCount){
    for(i = 0; i<cardCount; i++){

        let li=document.createElement('li');
        li.innerHTML= `
        
        <h4 class="flipcard-head"> ${vocabulary[i].english} </h4>
        <p class="flipcard-body"> ${vocabulary[i].turkish} </p>
        `;

        li.innerHTML = `
    <h4 class="flipcard-head">${vocabulary[i].english}</h4>
    <p class="flipcard-body">${vocabulary[i].turkish}</p>
    `;

        li.classList.add("flipcard");
        flipcards.appendChild(li);
        
    }
}

//start fonctions



// START STATE
createCards(cardCount);

const flipbox = document.querySelectorAll('.flipcard');
console.log(flipbox);

flipbox.forEach((box) => {
  box.addEventListener('click', function () {
    box.classList.toggle('active');
  });
});
