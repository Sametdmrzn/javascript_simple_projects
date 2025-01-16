const tips = document.querySelector(".tips");
const tip = document.querySelectorAll(".tip");
const calculate = document.querySelector(".calculate");
const reset = document.querySelector(".reset");
const display = document.querySelector(".display");

let percentange;

// bahşiş karar verici
tips.addEventListener("click", function (e) {
    removeActiveClasses();
    if (e.target.classList.contains("tip")) {
      e.target.classList.add("active");
        percentange = e.target.innerHTML;
    }

    if (percentange ==="turkey"){
        percentange=0;
    }else if (percentange === "usa"){
        percentange=12;
    }else if (percentange === "england"){
        percentange = 18;
    }else if (percentange === "uganda") {
        percentange =21;
    }else {
        percentange = parseInt(percentange);
    }

})

//Events

calculate.addEventListener("click", function () {
    const inputValue = document.querySelector(".input").value;
    const result = (inputValue * percentange) / 100;
    if (percentange === 0) {
        display.textContent = "teşekkürler.";
        document.querySelector(".adv").computedStyleMap.display = "block";
    }else {
        display.textContent = "ideal bahşiş ödemesi" + result;
        document.querySelector(".adv").computedStyleMap.display = "flex";   
    }
})

//Reset

reset.addEventListener("click", function() {
    location.reload();
})


function removeActiveClasses() {
    tip.forEach((singleTip) =>{
        singleTip.classList.remove("active");
    });
}
