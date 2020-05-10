function janela(valo){
    const janela   = document.querySelector(".dbites-window");
    const fundp    = document.createElement("div");
    const tituloJ  = janela.getAttribute("dbites-title");

    fundp.id="";
    fundp.className="";
    fundp.innerHTML=`<div class='titulo' style='margin-top:-39px;color:#fff;
    font-weight:bold;text-align:center;'>${tituloJ}<span id='fechar' style='position:absolute;right:20%;'><img width='20' src='app/views/imgs/fechar.png' /></span></div>`;
    janela.setAttribute("style","display:grid;justify-content:center;align-items:center;position:fixed;z-index:999;width:100vw;height:100vh;top:0;background-color:rgba(0,0,0,0.8);");
    fundp.setAttribute("style",`padding:10px;border-radius:7px 7px 0px 0px;border-top:40px solid #5cc1bd;width:60vw;height:50vh;background-color:#fff;box-shadow:0px 0px 30px
    rgba(0,0,0,0.3);`);
    fundp.innerHTML += "<br>"+valo;
    janela.appendChild(fundp);
    document.querySelector("#fechar").onclick=function(){
        janela.style.display="none";
        fundp.remove();
    }
}
