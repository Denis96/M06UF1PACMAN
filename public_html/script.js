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
    /* 8*/[1, 1, 1 ,1 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,1 ,1],
    /* 9*/[1, 1, 1 ,1 ,1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,1 ,1 ,1 ,1],
    /*10*/[1, 1, 1 ,1 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,1 ,1 ,1 ,1],
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
    /*22*/[1, 1, 1 ,1 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,1 ,1 ,1 ,1],
    /*23*/[1, 1, 1 ,1 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,1 ,1 ,1 ,1],
    /*24*/[1, 1, 1 ,1 ,1 ,1 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,1 ,1],
    /*25*/[1, 0, 0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1],
    /*26*/[1, 0, 1 ,1 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,1],
    /*27*/[1, 0, 0 ,0 ,0 ,0 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,1],
    /*28*/[1, 0, 1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1],
    /*29*/[1, 0, 0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,1],
    /*30*/[1, 0, 1 ,0 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,1],
    /*31*/[1, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1],
    /*32*/[1, 1, 1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1]
    ];
    
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
var pacman = [
  0,0,  // posición !! [0]=FILA(X) [1]=COLUMNA(Y) !!
  0,    // dirección (1=up,2=right,3=down,4=left, 0=undefined)
  1    // cambio dirección (1=up,2=right,3=down,4=left, 0=undefined)
];

function inicializar(){ // o(bjeto)= fantasmas o jugador
    ubicar(pacman, fantasma1, fantasma2, fantasma3);
    ubicar(fantasma1, fantasma2, fantasma3, pacman);
    ubicar(fantasma2, fantasma3, pacman, fantasma1);
    ubicar(fantasma3, pacman, fantasma1, fantasma2);
    direccionar(pacman);
    direccionar(fantasma1);
    direccionar(fantasma2);
    direccionar(fantasma3);
}

function ubicar(o, o1, o2, o3){ // o(bjeto)= fantasmas o jugador
    var p = new Array(2);
    do {
        p[0]= parseInt( (Math.random() * ( mapa.length-1) ) +1 );
        p[1]= parseInt( (Math.random() * ( mapa[0].length-1) ) +1 );
    }while(mapa[p[0]][p[1]]==1);
    o[0]=p[0];
    o[1]=p[1];
}

function direccionar(o, m){ // m= dirección actual || o=objeto
    var camino = 0;
    if (m == null) {
        camino = parseInt( ( Math.random() * (totalPosibles(o)) )+1 );
        //alert(camino);
        o[2]=escogerCamino(o, camino);
    } /*else {
        
    }*/
}
function totalPosibles(o){ // m= dirección actual || o=objeto
    var n=0;
    if (mapa[ o[0]-1 ][ o[1] ]==0 ) { n++; }
    if (mapa[ o[0] ][ o[1]+1 ]==0 ) { n++; }
    if (mapa[ o[0]+1 ][ o[1] ]==0 ) { n++; }
    if (mapa[ o[0] ][ o[1]-1 ]==0 ) { n++; }
    return n;
}
function escogerCamino(o, camino){ // o=objeto ||  camino=camino elegido
    var n=1; //el camino que va a probar
    if (mapa[ o[0]-1 ][ o[1] ]==0 ) { if (n==camino){return 1;}else{n++;} }
    if (mapa[ o[0] ][ o[1]+1 ]==0 ) { if (n==camino){return 2;}else{n++;} }
    if (mapa[ o[0]+1 ][ o[1] ]==0 ) { if (n==camino){return 3;}else{n++;} }
    if (mapa[ o[0] ][ o[1]-1 ]==0 ) { if (n==camino){return 4;}else{n++;} }
}

function myFunction() {
    var log = "";
    inicializar();
    var out = "";
    for (var i=0 ; i<mapa.length ; i++) {
        for (var j=0 ; j<mapa[i].length ; j++) {
            if          (pacman[0]==i && pacman[1]==j ) {       out=printMP(pacman,out);
            } else if   (fantasma1[0]==i && fantasma1[1]==j) {  out=printMF(fantasma1,out);
            } else if   (fantasma2[0]==i && fantasma2[1]==j) {  out=printMF(fantasma2,out);
            } else if   (fantasma3[0]==i && fantasma3[1]==j) {  out=printMF(fantasma3,out);
            } else {
                mapa[i][j]==1 ? out=out+"&#9724;" : out=out+"&#9723;";
            }
        }
        out=out+"<br>";
    }
    out=out+"<br>";
    
    document.getElementById("map").innerHTML = out;
    document.getElementById("log").innerHTML = logf();
}
function printMP(o, out){
    switch(o[2]) {
        case 1: out=out+"&#9650;"; break; // ▲
        case 2: out=out+"&#9658;"; break; // ►
        case 3: out=out+"&#9660;"; break; // ▼
        case 4: out=out+"&#9668;"; break; // ◄
        default: out=out+"P "
    }
    return out;
}
function printMF(o, out){      
    switch(o[2]) {
        case 1: out=out+"&#9651;"; break; // △
        case 2: out=out+"&#9655;"; break; // ▷
        case 3: out=out+"&#9661;"; break; // ▽
        case 4: out=out+"&#9665;"; break; // ◁
        default: out=out+"F "
    }
    return out;
}




function logf() {
    var log="";
    log=log+print_r(pacman)+"<br>";
    log=log+print_r(fantasma1)+"<br>";
    log=log+print_r(fantasma2)+"<br>";
    log=log+print_r(fantasma3)+"<br>";
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
