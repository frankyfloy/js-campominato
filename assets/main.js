// START CAMPOMINATO

// VARIABILI PROGRAMMA
var arrayNum_Position_Bombe;
var arraiNumInput;

var arrayNum_final = new Array();

// TODO:  Creare div scelta difficoiltà ed aggiungere l'input a questa variabile
var difficulty = "EASY";
console.log(Array_Num_difficulty("EASY"));
// Array_Num_difficulty("EASY");

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




console.log(controllerNumInput(3,arrayNum_final));

// FUNZIONI
// funzione che controlla se numero input e "Una Bomba!!!"  (Un ciclo di suspense..)
function controllerNumInput(numInput,array){
    var includes_numInput = false;
    if (array.includes(numInput)) {
        includes_numInput = true;
    }else {
        includes_numInput = false;
    }
    return includes_numInput;
}

// Function create array num generate
function Array_Num_difficulty(difficulty){
    // Popolamento ARRAY caselle gioco undefined con 0 escluso nello scopo finale
    arrayNum_final.length = 101;

    switch (difficulty) {
        case "EASY":
            //Array d'appoggio numeri generati
            var arrayTemp = createArray_Num_Position_Bombe(100);

            for (var i = 0; i < 16; i++) {

                var num_Value_Index = arrayTemp[i];
                console.log(arrayTemp[i]);

                // Aggiunta del valore all'indice corrispondente nell arrayNum_final
                // Chiamata alla funzione insertIndex.
                insertIndex(num_Value_Index, num_Value_Index, arrayNum_final);
            }

        break;

        case "EXPERT":
            //Array d'appoggio numeri generati
            var arrayTemp = createArray_Num_Position_Bombe(100);

            for (var i = 0; i < 16; i++) {

                var num_Value_Index = arrayTemp[i];

                // Aggiunta del valore all'indice corrispondente nell arrayNum_final
                // Chiamata alla funzione insertIndex.
                insertIndex(num_Value_Index, num_Value_Index, arrayNum_final);
            }
        break;

        case "PRO":
            //Array d'appoggio numeri generati
            var arrayTemp = createArray_Num_Position_Bombe(100);

            for (var i = 0; i < 16; i++) {

                var num_Value_Index = arrayTemp[i];
                console.log(arrayTemp[i]);

                // Aggiunta del valore all'indice corrispondente nell arrayNum_final
                // Chiamata alla funzione insertIndex.
                insertIndex(num_Value_Index, num_Value_Index, arrayNum_final);
            }
        break;
    }


    // Ritorno della funzione main
    return arrayNum_final;

    function createArray_Num_Position_Bombe(numbers_ToGenerate){
        var controllo = 0;
        var arrayGenerate = new Array();

        while (controllo <= 16) {
            var numGenerate = Math.floor(Math.random() * numbers_ToGenerate + 1);

            if (!arrayGenerate.includes(parseInt(numGenerate))) {
                arrayGenerate.push(numGenerate);
                controllo += 1;
            }
        }
        return arrayGenerate;
    }

    // Funzione che aggiunge all'indice specificato ed elimina l'elemento all'indice precedente all'indice dell' aggiunta
    function insertIndex(index,value){
        // arrayNum_final variabile locale Array_Num_difficulty.
        arrayNum_final.splice(index, 1, value);
    }
}
