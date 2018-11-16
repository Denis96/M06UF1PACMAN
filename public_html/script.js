var mapa = [
    //     0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32
    /* 0*/[1, 1, 1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1],
    /* 1*/[1, 0, 0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1],
    /* 2*/[1, 0, 1 ,1 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,0 ,1],
    /* 3*/[1, 0, 1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,0 ,1],
    /* 4*/[1, 0, 1 ,0 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1],
    /* 5*/[1, 0, 0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,1],
    /* 6*/[1, 0, 1 ,1 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,0 ,1],
    /* 7*/[1, 0, 0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1],
    /* 8*/[1, 1, 1 ,0 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,1 ,1],
    /* 9*/[0, 0, 0 ,0 ,1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0],
    /*10*/[1, 1, 1 ,0 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,1],
    /*11*/[1, 0, 0 ,0 ,1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1],
    /*12*/[1, 0, 1 ,0 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,0 ,1],
    /*13*/[1, 0, 1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,1],
    /*14*/[1, 0, 1 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,0 ,1],
    /*15*/[1, 0, 1 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,1],
    /*16*/[1, 0, 1 ,1 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,0 ,1],
    /*17*/[1, 0, 1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,0 ,1],
    /*18*/[1, 0, 1 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,0 ,1],
    /*19*/[1, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,1 ,0 ,0 ,0 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1],
    /*20*/[1, 0, 1 ,1 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,0 ,1],
    /*21*/[1, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1],
    /*22*/[1, 1, 1 ,0 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,1],
    /*23*/[0, 0, 0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0],
    /*24*/[1, 1, 1 ,0 ,1 ,1 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,1 ,1],
    /*25*/[1, 0, 0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1],
    /*26*/[1, 0, 1 ,1 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,1],
    /*27*/[1, 0, 0 ,0 ,0 ,0 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,1],
    /*28*/[1, 0, 1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1],
    /*29*/[1, 0, 1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,0 ,1],
    /*30*/[1, 0, 1 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,0 ,1],
    /*31*/[1, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1],
    /*32*/[1, 1, 1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1]
    ];
   
// los pacs serian equivalente a los dots del pacman, pero al ser cuadrados los llame "pacs" 
var totalPacs = 0; // sirve para decir cuando acaba el juego
var pacs = new Array();
    fillPacs();

// fillPacs: llena todas la matriz donde hay 0 con pacs y marca el total de pacs
    // nota: no rellena los bordes

function fillPacs() {
    totalPacs = 0;
    for ( var i=0 ; i<mapa.length ; i++) {
        pacs[i]=new Array();
        for ( var j=0 ; j<mapa[i].length ; j++) {
            if ( !(i==0 || i==mapa.length-1 || j==0 || j==mapa[i].length-1) ){
                if (mapa[i][j]==0) {
                    pacs[i][j]=1;totalPacs++;
                } else { pacs[i][j]=0 };
            } else { pacs[i][j]=0; }
        }
    }
}

// INTERCAMBIAR ESTE CODIGO CON EL DE ARRRIBA PARA PROBAR LA VICTORIA DE FORMA RÁPIDA
/*
function fillPacs() {
    totalPacs = 1;
    for ( var i=0 ; i<mapa.length ; i++) {
        pacs[i]=new Array();
        for ( var j=0 ; j<mapa[i].length ; j++) {
            pacs[i][j]=0;
        }
    }
    pacs[15][16]=1;
}
*/

var play = null;

var puntos = 0;
var muerte = false;

var fantasma1 = [
  0,0,  // posición !! [0]=FILA(X) [1]=COLUMNA(Y) !!
  0    // dirección (1=up,2=right,3=down,4=left, 0=undefined)
];
var fantasma2 = [
  0,0,  // posición !! [0]=FILA(X) [1]=COLUMNA(Y) !!
  0    // dirección (1=up,2=right,3=down,4=left, 0=undefined)
];
var fantasma3 = [
  0,0,  // posición !! [0]=FILA(X) [1]=COLUMNA(Y) !!
  0    // dirección (1=up,2=right,3=down,4=left, 0=undefined)
];
var fantasma4 = [
  0,0,  // posición !! [0]=FILA(X) [1]=COLUMNA(Y) !!
  0    // dirección (1=up,2=right,3=down,4=left, 0=undefined)
];
var pacman = [
  0,0,  // posición !! [0]=FILA(X) [1]=COLUMNA(Y) !!
  0,    // dirección (1=up,2=right,3=down,4=left, 0=undefined)
  0    // cambio dirección (1=up,2=right,3=down,4=left, 0=undefined)
];
function restablecerO() { // restablace todos los objetos
    fantasma1 = [0, 0, 0];
    fantasma2 = [0, 0, 0];
    fantasma3 = [0, 0, 0];
    fantasma4 = [0, 0, 0];
    pacman = [0, 0, 0, 0];
}
var tecla = document.getElementById("all");

function myFunction() {
    var out = "";
    var controls = "";
        controls=controls+"<button style=\"margin-right: 10px;\" onclick=\"playGame()\">Play</button>";
        controls=controls+"<button onclick=\"reset()\">Restart</button>";
    controls=controls+"<hr/>";
    
    document.getElementById("start").innerHTML = "";
    document.getElementById("controls").innerHTML = controls;
    
    inicializar();
    
    out=printM(out);
    logf();
}
function playGame() {
    end(); // Evita que  pueda haber multibles setIntervals activos
    !muerte ? play = setInterval(move, 250) : "";
}
function end() {
    clearInterval(play);
}
function reset() {
    var out ="";
    end();
    fillPacs();
    restablecerO();
    inicializar();
    out=printM(out);
    logf();
}
function move() {
    var out="";
    comerPac(pacman);
    document.onkeydown = teclado;
    direccionarP(pacman);
    direccionar(fantasma1);
    direccionar(fantasma2);
    direccionar(fantasma3);
    direccionar(fantasma4);
    moveO(pacman);
        colision();
    moveO(fantasma1);
    moveO(fantasma2);
    moveO(fantasma3);
    moveO(fantasma4);
        colision();
    
    if (puntos==totalPacs) {
        end(); 
        out=printVictoria(out);
        records();
    } else if (!muerte) {
        out=printM(out);
    } else {
        out=printMuerte(out);
    }
    logf();
}

function inicializar(){ // ubica y direcciona todos los objetos
    checkCookie();printRecords();
    ubicar(pacman, fantasma1, fantasma2, fantasma3, fantasma4);
    ubicar(fantasma1, fantasma2, fantasma3, fantasma4, pacman);
    ubicar(fantasma2, fantasma3, fantasma4, pacman, fantasma1);
    ubicar(fantasma3, fantasma4, pacman, fantasma1, fantasma2);
    ubicar(fantasma4, pacman, fantasma1, fantasma2, fantasma3);
    direccionar(pacman);
    direccionar(fantasma1);
    direccionar(fantasma2);
    direccionar(fantasma3);
    direccionar(fantasma4);
    puntos=0;
    muerte=false;
}

// ubica en una posicion valida un objeto
function ubicar(o, o1, o2, o3, o4){ // o(bjeto)= fantasmas o jugador || oX = demas objetos
    var p = new Array(2);
    do {
        p[0]= parseInt( (Math.random() * ( mapa.length-2) ) +1 );
        p[1]= parseInt( (Math.random() * ( mapa[p[0]].length-2) ) +1 );
    }while(mapa[p[0]][p[1]]==1  ||  (p[0]==o1[0] && p[1]==o1[1])  ||  (p[0]==o2[0] && p[1]==o2[1])  ||  (p[0]==o3[0] && p[1]==o3[1])  ||  (p[0]==o4[0] && p[1]==o4[1]));
    // escoge un casilla aleatoria lible donde no esté otro objeto
    o[0]=p[0];
    o[1]=p[1];
}

// establece una direccion del  pacman
function teclado(e){ 
    var key = document.all ? e.which : e.key;
    if (key=="ArrowUp"){
        pacman[3] = 1; // arriba
    }
    else if (key == "ArrowRight"){
        pacman[3] = 2; // derecha
    }
    else if (key =="ArrowDown"){
        pacman[3] = 3; // izquierda
    }
    else if (key == "ArrowLeft"){
        pacman[3] = 4; // abajo
    }
}

function direccionarP(o){ // o=objeto que queremos direccionar || m=null
    if ( comprobarDireccion(o, o[2]) ) { // comprueba si el objeto puede seguir en linea recta
        if ( comprobarDireccion(o, o[3]) ) { // comprueba si el objeto puede girar
            o[2]=o[3];
            o[3]=0;
        }
    } else {
        direccionar(o);
    } 
}

// escoge una dirección valida para el objeto
function direccionar(o){ // o=objeto que queremos direccionar || m=null
    var camino = 0;
    if (!(o[0]==0 || o[0]==mapa.length-1 || o[1]==0 || o[1]==mapa[o[1]].length-1)) {
        // si esta en un borde del mapa, su direccion no cambiará
        camino = parseInt( ( Math.random() * (totalPosibles(o)-1) )+1 );
        // genera un numero aletorio entre todos los caminos posibles
            // pd: se quita uno porque nunca volverá hacia atras (en mi mapa nunca habrá un callejón)
                // nota: no lo llegar a probar del todo, pero si entra en un callejón, vuelve,
                    //  pero no he terminado de probar esta caracteristica porque yo no la uso

        o[2]=escogerCamino(o, camino);
        // guarda la dirección del camino elegido
    }
}
// comprueba que la siguiente casilla de una dirección (d) esté vacia
function comprobarDireccion(o, d){
    if (    ( d==1 && mapa[ o[0]-1 ][ o[1] ]==0 ) || 
            ( d==2 && mapa[ o[0] ][ o[1]+1 ]==0 ) ||
            ( d==3 && mapa[ o[0]+1 ][ o[1] ]==0 ) || 
            ( d==4 && mapa[ o[0] ][ o[1]-1 ]==0 ) ) {
        return true;
    } else {
        return false;
    }
}
// cuenta todos los caminos posibles
function totalPosibles(o){ // o=objeto
    var n=0;
    if (mapa[ o[0]-1 ][ o[1] ]==0 ) { n++; }
    if (mapa[ o[0] ][ o[1]+1 ]==0 ) { n++; }
    if (mapa[ o[0]+1 ][ o[1] ]==0 ) { n++; }
    if (mapa[ o[0] ][ o[1]-1 ]==0 ) { n++; }
    return n;
}
// escoge un camino entre los posibles
function escogerCamino(o, camino){ // o=objeto ||  camino=camino elegido
    var n=1; //el camino que va a probar
    // si la posicion esta vacia y si no es la dirección contraria
    if (mapa[ o[0]-1 ][ o[1] ]==0 && o[2]!=3 ) { if (n==camino){return 1;}else{n++;} }
    if (mapa[ o[0] ][ o[1]+1 ]==0 && o[2]!=4 ) { if (n==camino){return 2;}else{n++;} }
    if (mapa[ o[0]+1 ][ o[1] ]==0 && o[2]!=1 ) { if (n==camino){return 3;}else{n++;} }
    if (mapa[ o[0] ][ o[1]-1 ]==0 && o[2]!=2 ) { if (n==camino){return 4;}else{n++;} }
}
// come un cuadrado
function comerPac(o) {
    // si  en la posicion actual del pacman hay un pac, lo elimina y suma a la puntuación
    if ( pacs[ o[0] ][ o[1] ] == 1 ) {
        pacs[ o[0] ][ o[1] ]=0;
        
        puntos++;
    } 
}
// comprueba si el pacman esta en la misma posición que un fantasma
function colision() {
    if (    (pacman[0]==fantasma1[0]&&pacman[1]==fantasma1[1]) ||
            (pacman[0]==fantasma2[0]&&pacman[1]==fantasma2[1]) ||
            (pacman[0]==fantasma3[0]&&pacman[1]==fantasma3[1]) ||
            (pacman[0]==fantasma4[0]&&pacman[1]==fantasma4[1]) ) {
        // si esta en la misma posición:
        end();  // para el setInterval
        muerte=true;    // marca como muerto
        records();  // comprueba los records en las cookies
    }
}
// mueve un objeto
function moveO(o) {
    // si esta en un borde del mapa yendo a esa dirección, lo mueve a otro lado del mapa
        // sino lo mueve
    if (        o[0]==0 && o[2]==1) {                   o[0]=mapa.length-1;
    } else if ( o[1]==mapa[o[0]].length-1 && o[2]==2) { o[1]=0;
    } else if ( o[0]==mapa.length-1 && o[2]==3) {       o[0]=0;
    } else if ( o[1]==0 && o[2]==4) {                   o[1]=mapa[o[1]].length-1;
    } else {
        switch(o[2]) {
            case 1: o[0]--; break; // ▲
            case 2: o[1]++; break; // ►
            case 3: o[0]++; break; // ▼
            case 4: o[1]--; break; // ◄
        }
    }
}
// Print del jugador, fantasmas, pacs, y mapa, en ese orden.
function printM(out){
    for (var i=0 ; i<mapa.length ; i++) {
        for (var j=0 ; j<mapa[i].length ; j++) {
            if          (pacman[0]==i && pacman[1]==j ) {       out=out+"<span style=\"color:yellow\">"+printMO(pacman)+"</span>";
            } else if   (fantasma1[0]==i && fantasma1[1]==j) {  out=out+"<span style=\"color:red\">"+printMO(fantasma1)+"</span>";
            } else if   (fantasma2[0]==i && fantasma2[1]==j) {  out=out+"<span style=\"color:cyan\">"+printMO(fantasma2)+"</span>";
            } else if   (fantasma3[0]==i && fantasma3[1]==j) {  out=out+"<span style=\"color:orange\">"+printMO(fantasma3)+"</span>";
            } else if   (fantasma4[0]==i && fantasma4[1]==j) {  out=out+"<span style=\"color:fuchsia\">"+printMO(fantasma4)+"</span>";
            } else if   (pacs[i][j]==1) {   out=out+"<span style=\"color:silver\">&#9723;</span>";
            } else {
                mapa[i][j]==1 ? out=out+"&#9724;" : out=out+"<span style=\"color:black\">&#9723;</span>";
            }
        }
        out=out+"<br>";
    }
    out=printPuntos(out);
    document.getElementById("map").innerHTML = out;
}
// print del objeto dependiendo de su dirección
function printMO(o){  
    var direccion ="";    
    switch(o[2]) {
        case 1: direccion="&#9651;"; break; // △
        case 2: direccion="&#9655;"; break; // ▷
        case 3: direccion="&#9661;"; break; // ▽
        case 4: direccion="&#9665;"; break; // ◁
        default: direccion="F ";
    }
    return direccion;
}
// print de los puntos
function printPuntos(out){
    out=out+"<br><span style=\"color:yellow;font-family:courier\">Pacs: "+ puntos;
    out=out+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    if (muerte) {out=out+"<span style=\"color:red\">HAS MUERTO</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    } else if (puntos==totalPacs) {out=out+"<span style=\"color:LawnGreen\">HAS GANADO</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";}
    out=out+"Max: "+ totalPacs +"</span><br><br>";
    return out;
}
// print del mapa cuando mueres
function printMuerte(out){
    for (var i=0 ; i<mapa.length ; i++) {
        for (var j=0 ; j<mapa[i].length ; j++) {
            if (pacman[0]==i && pacman[1]==j ) {
                out=out+"<span style=\"color:yellow\">"+printMO(pacman)+"</span>";
            } else {
                mapa[i][j]==1 ? out=out+"<span style=\"color:red\">&#9724;</span>" : out=out+"<span style=\"color:black\">&#9723;</span>";
            }
        }
        out=out+"<br>";
    }
    out=printPuntos(out);
    document.getElementById("map").innerHTML = out;
}
// print del mapa cuando ganas
function printVictoria(out){
    for (var i=0 ; i<mapa.length ; i++) {
        for (var j=0 ; j<mapa[i].length ; j++) {
            if (pacman[0]==i && pacman[1]==j ) {
                out=out+"<span style=\"color:yellow\">"+printMO(pacman)+"</span>";
            } else {
                mapa[i][j]==1 ? out=out+"<span style=\"color:LawnGreen\">&#9724;</span>" : out=out+"<span style=\"color:black\">&#9723;</span>";
            }
        }
        out=out+"<br>";
    }
    out=printPuntos(out);
    document.getElementById("map").innerHTML = out;
}
// comprueba los records y los imprime
function records(){
    checkRang();
    printRecords();
}
// print de los records
function printRecords(){
    var varRecord="";
    varRecord+="<p>"
    varRecord+="1."+getCookie("re1Name")+" ...... "+getCookie("re1Points")+"<br><br>";
    varRecord+="2."+getCookie("re2Name")+" ...... "+getCookie("re2Points")+"<br><br>";
    varRecord+="3."+getCookie("re3Name")+" ...... "+getCookie("re3Points")+"<br><br>";
    varRecord+="4."+getCookie("re4Name")+" ...... "+getCookie("re4Points")+"<br><br>";
    varRecord+="5."+getCookie("re5Name")+" ...... "+getCookie("re5Points");
    varRecord+="</p>";
    varRecord+="<button onclick=\"deleteCookies()\">Borrar</button>";
    document.getElementById("records").innerHTML = varRecord;
}
// comprueba si existen los records
function checkCookie() {
    var records=getCookie("records");
    if (records == "") {
        createCookie();
    }
}
// elimina los records
function deleteCookies() {
    document.cookie = "records=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    checkCookie();
    printRecords();
}
// crea los records vacios
function createCookie() {
    var d = new Date();
    d.setTime(d.getTime() + (1*24*60*60*1000)); // añade 1 dia a la cookie
    var expires = "expires=" + d.toGMTString();
    
    document.cookie = "records=1;" + expires;
    
    document.cookie = "re1Name=---;" + expires;
    document.cookie = "re1Points=000;" + expires;
    
    document.cookie = "re2Name=---;" + expires;
    document.cookie = "re2Points=000;" + expires;
    
    document.cookie = "re3Name=---;" + expires;
    document.cookie = "re3Points=000;" + expires;
    
    document.cookie = "re4Name=---;" + expires;
    document.cookie = "re4Points=000;" + expires;
    
    document.cookie = "re5Name=---;" + expires;
    document.cookie = "re5Points=000;" + expires;
}
// comprueba si el record esta entre los 5 primeros
function checkRang() {
    if          (puntos >= getCookie("re1Points")) { newRecord(1);
    } else if   (puntos >= getCookie("re2Points")) { newRecord(2);
    } else if   (puntos >= getCookie("re3Points")) { newRecord(3);
    } else if   (puntos >= getCookie("re4Points")) { newRecord(4);
    } else if   (puntos >= getCookie("re5Points")) { newRecord(5);
    }
}
// mueve los records y crea el nuevo
function newRecord(n){
    var d = new Date();
    d.setTime(d.getTime() + (1*24*60*60*1000)); // añade 1 dia a la cookie
    var expires = "expires=" + d.toGMTString();
    
    moveRecords(n, expires);
    setCookie(n, expires);
}
// crea el nuevo record en su posición
function setCookie(n, expires) {
    var name = "";
    do {
        name = prompt("Name (3 letters):");
    } while (name.length!=3);
    
    name = name.toUpperCase();
    
    var points = "";
    
    if (puntos <10 ) { points+="00"+puntos;
    } else if (puntos <100 ) { points+="0"+puntos;
    } else { points+=""+puntos; 
    }
    
    document.cookie = "re"+n+"Name="+ name +";"+ expires;
    document.cookie = "re"+n+"Points="+ points +";"+ expires;
}
// mueve los records hacia abajo si hay uno superior
function moveRecords(n, expires) {
    document.cookie = "records=1;" + expires;
    
    if (n <= 4) {
        document.cookie = "re5Name="+ getCookie("re4Name") +";"+ expires;
        document.cookie = "re5Points="+ getCookie("re4Points") +";"+ expires;
    }
    if (n <= 3) {
        document.cookie = "re4Name="+ getCookie("re3Name") +";"+ expires;
        document.cookie = "re4Points="+ getCookie("re3Points") +";"+ expires;
    }
    if (n <= 2) {
        document.cookie = "re3Name="+ getCookie("re2Name") +";"+ expires;
        document.cookie = "re3Points="+ getCookie("re2Points") +";"+ expires;
    }
    if (n <= 1) {
        document.cookie = "re2Name="+ getCookie("re1Name") +";"+ expires;
        document.cookie = "re2Points="+ getCookie("re1Points") +";"+ expires;
    }
}

function getCookie(cname) { // codigo de internet para acceder al contenido de una cookie
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// codigo para llevar un "log" del programa
function logf() {
    var log="";
    log=log+print_r(pacman)+"<br>";
    log=log+print_r(fantasma1)+"<br>";
    log=log+print_r(fantasma2)+"<br>";
    log=log+print_r(fantasma3)+"<br>";
    log=log+print_r(fantasma4)+"<br>";
    
    // Descomentar para mostrar un registro de los objetos
    // document.getElementById("log").innerHTML = log;
}

// codigo sacado de internet para hacer las pruebas
// este codigo copia al "print_r" de PHP
function print_r(arr,level) {
  var dumped_text = "(";
  if(!level) level = 0;
  var level_padding = "";
  for(var j=0;j<level+1;j++) level_padding += "    ";
    if(typeof(arr) == 'object') { //Array/Hashes/Objects 
      for(var item in arr) {
        var value = arr[item];
        if(typeof(value) == 'object') { //If it is an array,
          dumped_text += level_padding + "'" + item + "' ...\n";
          dumped_text += print_r(value,level+1);
        } else {
          dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
        }
      }
    } else { //Stings/Chars/Numbers etc.
    dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
  }
  dumped_text=dumped_text+")"+arr.length;
  return dumped_text;
 }
