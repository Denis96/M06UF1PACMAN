var mapa = [
    //     0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32
    /* 0*/[1, 1, 1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1],
    /* 1*/[1, 0, 0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1],
    /* 2*/[1, 0, 1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1],
    /* 3*/[1, 0, 0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,1],
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
    /*29*/[1, 0, 0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,1],
    /*30*/[1, 0, 1 ,0 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1],
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
    
    document.getElementById("log").innerHTML = logf();
}
function playGame() {
    !muerte ? play = setInterval(move, 50) : "";
}
function end() {
    clearInterval(play);
}
function reset() {
    var out ="";
    end();
    fillPacs();
    inicializar();
    out=printM(out);
    document.getElementById("log").innerHTML = logf();
}
function move() {
    var out="";
    comerPac(pacman);
    if (pacman[3]==0){
        moveO(pacman);
    } else {
        
    }
        colision();
    moveO(fantasma1);
    moveO(fantasma2);
    moveO(fantasma3);
    moveO(fantasma4);
        colision();
    direccionar(pacman);
    direccionar(fantasma1);
    direccionar(fantasma2);
    direccionar(fantasma3);
    direccionar(fantasma4);
    
    if (!muerte) {
        out=printM(out);
    } else {
        out=printMuerte(out);
    }
    document.getElementById("log").innerHTML = logf();
}

function inicializar(){ // ubica y direcciona todos los objetos
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

function direccionar(o, m){ // o=objeto que queremos direccionar || m=null
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
    //} /*else {}
    }
}

function colision() {
    if (    (pacman[0]==fantasma1[0]&&pacman[1]==fantasma1[1]) ||
            (pacman[0]==fantasma2[0]&&pacman[1]==fantasma2[1]) ||
            (pacman[0]==fantasma3[0]&&pacman[1]==fantasma3[1]) ||
            (pacman[0]==fantasma4[0]&&pacman[1]==fantasma4[1]) ) {
        end();
        muerte=true;
    }
}

function totalPosibles(o){ // o=objeto // cuenta todos los caminos posibles
    var n=0;
    if (mapa[ o[0]-1 ][ o[1] ]==0 ) { n++; }
    if (mapa[ o[0] ][ o[1]+1 ]==0 ) { n++; }
    if (mapa[ o[0]+1 ][ o[1] ]==0 ) { n++; }
    if (mapa[ o[0] ][ o[1]-1 ]==0 ) { n++; }
    return n;
}

function escogerCamino(o, camino){ // o=objeto ||  camino=camino elegido
    var n=1; //el camino que va a probar
    // si la posicion esta vacia y si no es la dirección contraria
    if (mapa[ o[0]-1 ][ o[1] ]==0 && o[2]!=3 ) { if (n==camino){return 1;}else{n++;} }
    if (mapa[ o[0] ][ o[1]+1 ]==0 && o[2]!=4 ) { if (n==camino){return 2;}else{n++;} }
    if (mapa[ o[0]+1 ][ o[1] ]==0 && o[2]!=1 ) { if (n==camino){return 3;}else{n++;} }
    if (mapa[ o[0] ][ o[1]-1 ]==0 && o[2]!=2 ) { if (n==camino){return 4;}else{n++;} }
}

function comerPac(o) {
     // si  en l aposicion actual del pacman hay un pac, lo elimina
    if ( pacs[ o[0] ][ o[1] ] == 1 ) {
        pacs[ o[0] ][ o[1] ]=0;
        
        puntos++;
        
    } 
}
function moveO(o) {
    // si esta en un borde del mapa yuendo a esa dirección, teletransporta el objeto
        // sino lo mueve
    if ( o[0]==0 && o[2]==1) { o[0]=mapa.length-1;
    } else if ( o[1]==mapa[o[0]].length-1 && o[2]==2) { o[1]=0;
    } else if ( o[0]==mapa.length-1 && o[2]==3) { o[0]=0;
    } else if ( o[1]==0 && o[2]==4) { o[1]=mapa[o[1]].length-1;
    } else {
        switch(o[2]) {
            case 1: o[0]--; break; // ▲
            case 2: o[1]++; break; // ►
            case 3: o[0]++; break; // ▼
            case 4: o[1]--; break; // ◄
        }
    }
}
function moveOP(){
    
}

function printM(out){
    for (var i=0 ; i<mapa.length ; i++) {
        for (var j=0 ; j<mapa[i].length ; j++) {
            if          (pacman[0]==i && pacman[1]==j ) {       out=out+"<span style=\"color:yellow\">"+printMF(pacman)+"</span>";//out=out+printMP(pacman);
            } else if   (fantasma1[0]==i && fantasma1[1]==j) {  out=out+"<span style=\"color:red\">"+printMF(fantasma1)+"</span>";
            } else if   (fantasma2[0]==i && fantasma2[1]==j) {  out=out+"<span style=\"color:cyan\">"+printMF(fantasma2)+"</span>";
            } else if   (fantasma3[0]==i && fantasma3[1]==j) {  out=out+"<span style=\"color:orange\">"+printMF(fantasma3)+"</span>";
            } else if   (fantasma4[0]==i && fantasma4[1]==j) {  out=out+"<span style=\"color:fuchsia\">"+printMF(fantasma4)+"</span>";
            } else if   (pacs[i][j]==1) {   out=out+"<span style=\"color:silver\">&#9723;</span>";
            } else {
                mapa[i][j]==1 ? out=out+"&#9724;" : out=out+"<span style=\"color:black\">&#9723;</span>";
            }
        }
        out=out+"<br>";
    }
    out=printPuntos(out);
    //out=out+"<br><span style=\"color:yellow;font-family:courier\">Pacs: "+puntos+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Max:"+totalPacs+"</span><br><br>";
    document.getElementById("map").innerHTML = out;
}
function printMP(o){ //
    var direccion ="";
    switch(o[2]) {
        case 1: direccion="&#9650;"; break; // ▲
        case 2: direccion="&#9654;"; break; // ►
        case 3: direccion="&#9660;"; break; // ▼
        case 4: direccion="&#9664;"; break; // ◄
        default: direccion="P ";
    }
    return direccion;
}
function printMF(o){  
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
function printPuntos(out){
    out=out+"<br><span style=\"color:yellow;font-family:courier\">Pacs: "+puntos;
    out=out+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    if (muerte) {out=out+"<span style=\"color:red\">HAS MUERTO</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";}
    out=out+"Max:"+totalPacs+"</span><br><br>";
    return out;
}

function printMuerte(out){
    for (var i=0 ; i<mapa.length ; i++) {
        for (var j=0 ; j<mapa[i].length ; j++) {
            if (pacman[0]==i && pacman[1]==j ) {
                out=out+"<span style=\"color:yellow\">"+printMF(pacman)+"</span>";
            } else {
                mapa[i][j]==1 ? out=out+"<span style=\"color:red\">&#9724;</span>" : out=out+"<span style=\"color:black\">&#9723;</span>";
            }
        }
        out=out+"<br>";
    }
    out=printPuntos(out);
    //out=out+"<br><span style=\"color:yellow;font-family:courier\">Pacs: "+puntos+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Max:"+totalPacs+"</span><br><br>";
    document.getElementById("map").innerHTML = out;
}




function logf() {
    var log="";
    log=log+print_r(pacman)+"<br>";
    log=log+print_r(fantasma1)+"<br>";
    log=log+print_r(fantasma2)+"<br>";
    log=log+print_r(fantasma3)+"<br>";
    log=log+print_r(fantasma4)+"<br>";
    log=log+print_r(mapa[1])+"<br>";
    log=log+print_r(mapa[9])+"<br>";
    return log;
}
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
