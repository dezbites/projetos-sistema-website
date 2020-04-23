// Controla a parte do primeiro acesso e apresentação
function ivis(){
    const divs = document.querySelectorAll(".corpo .menu");
    for(let i=0;i<divs.length;i++){
        divs[i].style.display="none";
    }
}

function chartsAreas(){
        grafic("#chart-1",{
            start:80,
            bg:"#5CC1BD"
        });
        grafic("#chart-2",{
            start:70,
            bg:"#C5EFE6"
        });
        grafic("#chart-3",{
            start:100,
            bg:"#5CC1BD"
        });
}

if( !localStorage.getItem('slider-show') ){
    ivis();
        document.querySelector(".corpo .home").style.display="none";
        document.querySelector(".corpo .apresentacao").style.display="grid";

        const telas   = document.querySelectorAll(".corpo .textos>div");
        const botaoAv = document.querySelector("#avanca");
        var qt = 1;
        botaoAv.onclick = function(){
            if( telas[qt] ){
                for(let i=0;i<telas.length;i++){
                    telas[i].style.display = "none";
                }
                telas[qt].style.display = "block";
                qt++;
            }else{
                qt++;
                if( qt > telas.length){
                    document.querySelector(".corpo .apresentacao").style.display="none";
                    localStorage.setItem("slider-show",1);
                    document.querySelector(".corpo .home").style.display="grid";
                    chartsAreas();
                }
            }
        }  
}else{
    ivis();
    document.querySelector(".corpo .home").style.display="grid";
    const corpoObjetos = document.querySelector(".corpo .apresentacao");
    corpoObjetos.style.display="none";
    corpoObjetos.remove();
}

//Charts Dashboard
const chart = (obj, vls) => {
    var start = vls.start;
        var end = 6.3;
        var porcenta = (start*end)/100;
        const canvasec = document.querySelector(obj+">canvas");
        const grafic   = canvasec.getContext("2d");

        grafic.clearRect(0, 0, 300,300);
        grafic.beginPath();
        grafic.arc(175, 75, 50, porcenta, 0, true);
        grafic.lineWidth = 17;
        grafic.strokeStyle = vls.bg;
        grafic.stroke();

        var titulos = document.querySelector(obj+">span");
        titulos.innerHTML = start+"%";
        titulos.setAttribute("style","\
        font-size:25px !important;font-weight:bold;position:absolute;\
        margin-top:50px;margin-left:-155px;");
} 

var grafic = (obj,endQt) =>{
    var contar = 0;
    var disp = setInterval(function(){
        chart(obj,{
            start:contar,
            bg:endQt.bg
        });
        contar++;
        
        if(contar > endQt.start){
            contar = 100;
            clearInterval(disp);
        }
    },10);
}


//Menu
function menu(){
    const qtmmenu    = document.querySelectorAll(".lateral a");
    const area       = document.querySelectorAll(".corpo .menu");
    const tituloDash = document.querySelector(".dashboard");
    for(let i=0;i<qtmmenu.length;i++){
        qtmmenu[i].onclick = function(){
            for(var t=0;t<area.length;t++){
                area[t].style.display="none";
                var lmenu = area[t].getAttributeNode("class").value;
                var secao = area[t].getAttribute("data-secao");
                lmenu     = lmenu.replace(" menu","");
                if(this.getAttribute("data-menu") == lmenu ){
                    if( this.getAttribute("data-menu") === "home" ){
                        tituloDash.innerHTML = secao;
                        chartsAreas();
                        area[t].style.display="grid";
                    }else{
                        tituloDash.innerHTML = secao;
                        area[t].style.display="grid";
                    }
                }
            }

        }
    }
}
menu();


window.onload = function(){
    chartsAreas();
}