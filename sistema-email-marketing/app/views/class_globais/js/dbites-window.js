function desfoq(vlsa){
    var vlsas = (vlsa===undefined || vlsa===null) ? true : false;
    if(vlsas){
        document.querySelector(".container").style.filter="blur(3px)";
    }else{
        document.querySelector(".container").style.filter="blur(0px)";
    }
}

function wind(valo,vls){
    if(vls==undefined && vls==null){vls=true;}
    if(vls){
        desfoq();
        const janela   = document.querySelector(".dbites-window");
        const fundp    = document.createElement("div");
        const tituloJ  = janela.getAttribute("dbites-title");
        fundp.id       = "";
        fundp.className= "";
        fundp.innerHTML=`<div class='titulo' style='margin-top:-39px;color:#fff;
        font-weight:bold;text-align:center;'>${tituloJ}<span id='fechar' style='cursor:pointer;position:absolute;right:20%;'><img width='20' src='app/views/imgs/fechar.png' /></span></div>`;
        janela.setAttribute("style","display:grid;justify-content:center;align-items:center;position:fixed;z-index:999;width:100vw;height:100vh;top:0;background-color:rgba(0,0,0,0.8);");
        fundp.setAttribute("style",`margin-top:-150px;overflow-y:auto;opacity:0;padding:10px;border-radius:7px 7px 0px 0px;border-top:40px solid #5cc1bd;width:60vw;height:50vh;background-color:#fff;box-shadow:0px 0px 30px
        rgba(0,0,0,0.3);transition:all 0.3s;`);
        fundp.innerHTML += "<br>"+valo;
        janela.appendChild(fundp);
        setTimeout(function(){
            fundp.style.marginTop="0px";
            fundp.style.opacity="1";
        },350);
        document.querySelector("#fechar").onclick=function(){
            janela.style.display="none";
            fundp.remove();
            desfoq(false);
        }
    }
}
