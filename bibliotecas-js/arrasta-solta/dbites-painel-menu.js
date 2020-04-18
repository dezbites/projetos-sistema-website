var drg = new objMove();

var divmenu = document.querySelector("#dbites-menu");
for( var i = 0; i < divmenu.querySelectorAll("div").length; i++ ){
    divmenu.querySelectorAll("div")[i].setAttribute("draggable","true");
}

var divm = divmenu.querySelectorAll("div");
divm[0].ondragstart = function(){
    drg.iniMove("dbites-menu-h",event);
}
divm[1].ondragstart = function(){
    drg.iniMove("dbites-slider",event);
}

document.querySelector('.painel-right').ondrop = function(){
    drg.iniSoltar({'nome':'div','id':'menu'},event);
}

document.querySelector('.painel-right').ondragover = function(){
    drg.iniPadrao(event);
}
