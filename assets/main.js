// START CAMPOMINATO

// VARIABILI PROGRAMMA
var arrayNum_Position_Bombe;
var arraiNumInput;

// TODO:  Creare div scelta difficoiltà ed aggiungere l'input a questa variabile
var difficulty = "EASY";


// VARIABILI ELEMENTI HTML
var container_Intro_Game = document.getElementById('container_Intro_Game');

var header_Start_Game = document.getElementById('header_Start_Game');

var header_Run_Game = document.getElementById('header_Run_Game');

var btn_Start_Campominato = document.getElementById('btn_Start_Campominato');

var container_Input_Num = document.getElementById('container_Input_Num');


// START CONTROLLER
btn_Start_Campominato.addEventListener("click", function(e){
    //  button gioca remove container_Intro_Game ADD.. d-none
    container_Intro_Game.classList.add("d-none");

    // container container_Input_Num "VISIBILE" togliendo d-none
    container_Input_Num.classList.remove("d-none");
});


// INIZIA IL GIOCO



// FUNZIONI

// Function create array num generate
function Array_Num_difficulty(difficulty){
    var arrayNum_final;
    switch (difficoltà) {
        case "EASY":
            arrayNum_final = createArray_Num_Position_Bombe(100).slice();
        break;

        case "EXPERT":
            createArray_Num_Position_Bombe(80).slice();
        break;

        case "PRO":
            createArray_Num_Position_Bombe(60).slice();
        break;

        default:
            createArray_Num_Position_Bombe(100).slice();
    }
}

console.log(createArray_Num_Position_Bombe(16));
function createArray_Num_Position_Bombe(numbers_ToGenerate){
    var controllo = 0;
    var arrayGenerate = new Array();

    while (controllo < 16) {
        var numGenerate = Math.floor(Math.random() * 100 + 1);

        if (!arrayGenerate.includes(parseInt(numGenerate))) {
            arrayGenerate.push(numGenerate);
            controllo += 1;
        }

        console.log(controllo);
    }
    return arrayGenerate;
}
