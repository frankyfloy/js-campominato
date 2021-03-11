// START CAMPOMINATO

// VARIABILI PROGRAMMA
// var arrayNum_Position_Bombe;
var arrayNum_final = new Array();
var contatore = 0;
var difficulty;


// VARIABILE ELEMENTO CONTATORE TURNI
var numTurnWin = document.getElementById('numTurnWin');

var numTurnLoose = document.querySelectorAll('numTurnLoose')


// VARIABILI ELEMENTI HTML
var container_Intro_Game = document.getElementById('container_Intro_Game');

var header_Start_Game = document.getElementById('header_Start_Game');

var header_Run_Game = document.getElementById('header_Run_Game');

var btn_Start_Campominato = document.getElementById('btn_Start_Campominato');

var container_Input_Num = document.getElementById('container_Input_Num');

var container_Input_Difficulty = document.getElementById('container_Input_Difficulty');

var container_CampoMinato = document.getElementById('container_CampoMinato');

var table_Campominato = document.getElementById('table_Campominato');

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
    difficulty = 100;
    array_Num_difficulty(difficulty);
    // Creo tabella
    crateTable(difficulty);

    container_Input_Difficulty.classList.add("d-none");
    container_Input_Num.classList.remove("d-none");
});

btn_Expert.addEventListener("click", function(e){
    // Avvio la funzione di creazione numeri generati EXPERT
    difficulty = 80;
    array_Num_difficulty(difficulty);
    // Creo tabella
    crateTable(difficulty);

    container_Input_Difficulty.classList.add("d-none");
    container_Input_Num.classList.remove("d-none");
});

btn_Pro.addEventListener("click", function(e){
    // Avvio la funzione di creazione numeri generati PRO
    difficulty = 60;
    array_Num_difficulty(difficulty);
    // Creo tabella
    crateTable(difficulty);

    container_Input_Difficulty.classList.add("d-none");
    container_Input_Num.classList.remove("d-none");
});





//CONTROLLO VINCITA --------------------------------
btn_input_Num.addEventListener("click", function(e){
    container_Input_Num.classList.add("d-none");

    // Salvo valore input numero;
    var inputNum = parseInt(document.getElementById('inputNum').value);
    // Variabile bool lo contiene? (il numero) --- true lo contiene "Hai perso"
    let includes_Num = controllerNumInput(inputNum,arrayNum_final);


    // Controllo Limite punteggio con contatore == difficoltà - numeri generati
    contatore ++;
    // Controllo limite massimo punteggio raggiunto
    if (contatore == difficulty - 16 && includes_Num){
        insertIndex(inputNum,inputNum);
        container_win.classList.remove("d-none");


    }
    else if (includes_Num) {  // Controllo Numero inserito, true se è all'interno
        container_loose.classList.remove("d-none");

    }else if (!includes_Num) {
        insertIndex(inputNum,inputNum);
        container_win.classList.remove("d-none");


    }


    // LOG DEBUG
    console.log(arrayNum_final);
    console.log(contatore);

});

btn_Win.addEventListener("click", function(e){
    container_win.classList.add("d-none");
    container_Input_Num.classList.remove("d-none");
});

btn_Loose.addEventListener("click", function(e){
    btn_Loose.add("d-none");
    container_Input_Num.classList.remove("d-none");
});






// FUNZIONI








// TODO: aggiungere valore alle cellTable

function addValueNumInput_To_Cell(numInput){

}



// CREAZIONE TABELLA CAMPOMINATO
function crateTable(numItem){
    var contatore = 1;
    for (var i = 1; i <= numItem / 10; i++) {

        var rowTable = document.createElement("TR");
        rowTable.classList.add("rowTable_Dynamic-" + i);

        table_Campominato.appendChild(rowTable);

        for (var j = 1; j <=  10; j++) {
            var cellTable = document.createElement("TD");
            // Creazione div che contiene il numero (ci servirà per farlo apparire quando ci servirà)
            var divContainerText = document.createElement("DIV");
            cellTable.appendChild(divContainerText);
            // Aggiunta testo
            var textNum = document.createTextNode(contatore);
            divContainerText.appendChild(textNum);
            // divContainerText.classList.add("d-none");

            cellTable.setAttribute("value", contatore);

            // Aggiunta classe bomba alla cella relativa all'indice della BOMBA
            rowTable.appendChild(cellTable);
            if (arrayNum_final[contatore] == contatore) {
                cellTable.classList.add("bomba");
            }

            contatore++;
        }
    }



    // VISUALIZZO LA TABELLA
    container_CampoMinato.classList.remove("d-none");
    container_CampoMinato.classList.add("d-flex");
}

// TODO: Aggiungere gli elementi
// funzione che controlla se numero input e "Una Bomba!!!"  (Un ciclo di suspense..)
function controllerNumInput(numInput,array){
    var includes_Num = false;
    if (array.includes(numInput)) {
        includes_Num = true;
    }else {
        includes_Num = false;
    }
    return includes_Num;
}


// Function create array num generate
function array_Num_difficulty(difficulty){

    console.log(difficulty);

    switch (difficulty) {
        case 100:
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
                insertIndex(num_Value_Index, num_Value_Index);
            }

        break;

        case 80:
            // Popolamento ARRAY caselle gioco undefined con 0 escluso nello scopo finale
            arrayNum_final.length = 80 + 1;

            //Array d'appoggio numeri generati
            var arrayTemp = createArray_Num_Position_Bombe(80);

            for (var i = 0; i < 16; i++) {

                var num_Value_Index = arrayTemp[i];

                // console dati lista
                console.log("----------------------");
                console.log(arrayTemp[i]);
                // Aggiunta del valore all'indice corrispondente nell arrayNum_final
                // Chiamata alla funzione insertIndex.
                insertIndex(num_Value_Index, num_Value_Index);
            }
        break;

        case 60:
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
                insertIndex(num_Value_Index, num_Value_Index);
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
