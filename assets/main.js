// START CAMPOMINATO

// VARIABILI PROGRAMMA
// var arrayNum_Position_Bombe;
var arrayNum_final = new Array();
var contatore = 0;

// COSTANTI
var EASY = 100;
var EXPERT = 80;
var PRO = 60;

// VARIABILE ELEMENTO CONTATORE TURNI
var numTurnWin = document.getElementById('numTurnWin');

var numTurnLoose = document.querySelectorAll('numTurnLoose')


// VARIABILI ELEMENTI HTML
var container_Intro_Game = document.getElementById('container_Intro_Game');

var header_Start_Game = document.getElementById('header_Start_Game');

var header_Run_Game = document.getElementById('header_Run_Game');

var btn_Start_Campominato = document.getElementById('btn_Start_Campominato');

var container_Input_Num = document.getElementById('container_Input_Num');

// CONTENITORI ESITO
var container_win = document.getElementById('container_win');
var container_loose = document.getElementById('container_loose');




// VARIABILI INPUT
var btn_input_Num = document.getElementById('btn_input_Num');


// VARIABILI INPUT-BUTTON-DIFFICULTY
var btn_Easy = document.getElementById('btn_Easy');

var btn_Expert = document.getElementById('btn_Expert');

var btn_Pro = document.getElementById('btn_Pro');

var btn_Win = document.getElementById('btn_Win');


// START CONTROLLER
btn_Start_Campominato.addEventListener("click", function(e){
    //button-gioca remove container_Intro_Game ADD.. d-none
    container_Intro_Game.classList.add("d-none");

    // container_Input_Num "VISIBILE" togliendo d-none
    container_Input_Difficulty.classList.remove("d-none");
});




// INIZIA IL GIOCO SCELTA DIFFICOLTà
btn_Easy.addEventListener("click", function(e){
    // Avvio la funzione di creazione numeri generati EASY
    array_Num_difficulty(EASY)

    container_Input_Difficulty.classList.add("d-none");
    container_Input_Num.classList.remove("d-none");
});

btn_Expert.addEventListener("click", function(e){
    // Avvio la funzione di creazione numeri generati EXPERT
    array_Num_difficulty(EXPERT)
    container_Input_Difficulty.classList.add("d-none");
    container_Input_Num.classList.remove("d-none");
});

btn_Pro.addEventListener("click", function(e){
    // Avvio la funzione di creazione numeri generati PRO
    array_Num_difficulty(PRO)
    container_Input_Difficulty.classList.add("d-none");
    container_Input_Num.classList.remove("d-none");
});





//CONTROLLO VINCITA --------------------------------
btn_input_Num.addEventListener("click", function(e){
    container_Input_Num.classList.add("d-none");

    // Salvo valore input numero;
    var inputNum = parseInt(document.getElementById('inputNum').value);
    contatore ++;


// TODO:  DA QUI-------- BLOCCO LIMITE MASSIMO VITTORIE PUNTEGGIO ECC..FARE LA GRIGLIA CON CASELLE CON  BG DINAMICO

    // Controllo Numero inserito, true se è all'interno
    if (controllerNumInput(inputNum,arrayNum_final)) {
        container_loose.classList.remove("d-none");

        // TODO: TROVA UNA SOLUZIONE
        // numTurnWin.innerHTML = .......
    }else{
        container_win.classList.remove("d-none");

        // TODO: TROVA UNA SOLUZIONE
        // numTurnWin.innerHTML = .......
    }
    // LOG DEBUG
    console.log(arrayNum_final);
    console.log(contatore);

});

// TODO: stai creando gli elementi della tabella
// CREAZIONE TABELLA CAMPOMINATO
function crateTable(numItem){
    for (var i = 1; i <= numItem; i++) {
        if (numItem == 100) {

        } else if (numItem == 80) {

        } else if (numItem == 60) {

        }
    }
}








btn_Win.addEventListener("click", function(e){
    container_win.classList.add("d-none");
    container_Input_Num.classList.remove("d-none");
});

btn_Loose.addEventListener("click", function(e){
    btn_Loose.add("d-none");
    container_Input_Num.classList.remove("d-none");
});





// FUNZIONI
// funzione che controlla se numero input e "Una Bomba!!!"  (Un ciclo di suspense..)
function controllerNumInput(numInput,array){
    console.log(numInput + "-----------");
    var includes_Num = false;
    if (array.includes(numInput)) {
        includes_Num = true;

    }else {
        includes_Num = false;
        insertIndex(numInput,numInput);
    }
    return includes_Num;
}

// Function create array num generate
function array_Num_difficulty(difficulty){


    switch (difficulty) {
        case "EASY":
            // Popolamento ARRAY caselle gioco undefined con 0 escluso nello scopo finale
            arrayNum_final.length = 100 + 1;

            //Array d'appoggio numeri generati
            var arrayTemp = createArray_Num_Position_Bombe(100);


            for (var i = 0; i < 16; i++) {

                var num_Value_Index = arrayTemp[i];

                // console dati lista
                console.log(arrayTemp[i]);

                // Aggiunta del valore all'indice corrispondente nell arrayNum_final
                // Chiamata alla funzione insertIndex.
                insertIndex(num_Value_Index, num_Value_Index, arrayNum_final);
            }

        break;

        case "EXPERT":
            // Popolamento ARRAY caselle gioco undefined con 0 escluso nello scopo finale
            arrayNum_final.length = 80 + 1;

            //Array d'appoggio numeri generati
            var arrayTemp = createArray_Num_Position_Bombe(80);

            for (var i = 0; i < 16; i++) {

                var num_Value_Index = arrayTemp[i];

                // console dati lista
                console.log(arrayTemp[i]);

                // Aggiunta del valore all'indice corrispondente nell arrayNum_final
                // Chiamata alla funzione insertIndex.
                insertIndex(num_Value_Index, num_Value_Index, arrayNum_final);
            }
        break;

        case "PRO":
            // Popolamento ARRAY caselle gioco undefined con 0 escluso nello scopo finale
            arrayNum_final.length = 60 + 1;

            //Array d'appoggio numeri generati
            var arrayTemp = createArray_Num_Position_Bombe(60);

            for (var i = 0; i < 16; i++) {

                var num_Value_Index = arrayTemp[i];

                // console dati lista
                console.log(arrayTemp[i]);

                // Aggiunta del valore all'indice corrispondente nell arrayNum_final
                // Chiamata alla funzione insertIndex.
                insertIndex(num_Value_Index, num_Value_Index, arrayNum_final);
            }
        break;
    }

    // Ritorno della funzione main
    return arrayNum_final;

    // INNER FUNCTION PRIVATA AD "array_Num_difficulty";
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

}

// Funzione che aggiunge all'indice specificato ed elimina l'elemento all'indice in questione
function insertIndex(index,value){
    // arrayNum_final variabile locale Array_Num_difficulty.
    arrayNum_final.splice(index, 1, value);
}
