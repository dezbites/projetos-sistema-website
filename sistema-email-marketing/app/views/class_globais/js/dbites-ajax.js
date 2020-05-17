const _ = {
    ajaxEnvio:function(obje){
        document.querySelector("form").onsubmit = function(){
            var formsrg = new FormData(this);
            var httpaj  = new XMLHttpRequest();
            httpaj.onreadystatechange = function(){
                if(httpaj.readyState == 4 && httpaj.status == 200){
                    if( obje.out ){
                        if( typeof obje.out === "function" ){
                            obje.out();
                        }else{
                            obje.dados = httpaj.responseText;
                            obje.func();
                        }
                    }else{ obje.dados = httpaj.responseText; obje.func(); }
                }else{ console.error("Erro de comunicação :("); }
            }
            httpaj.open(obje.met,obje.url,true);
            httpaj.send(formsrg);
    
            return false;
        }
    },
    post:function(link,po,saida){
        if( po === undefined && po === null ){
            console.error("Você precisa informar os valores!");
        }
        const formvl = new FormData();
        var vls      = po;
        if( typeof vls === 'function' ){
            vls();
        }else{
            var chave = Object.keys(vls);
            for( var i =0;i<chave.length;i++ ){
                formvl.append(chave[i],vls[chave[i]]);
            }
        }
    
        const ajaxx = new XMLHttpRequest();
       
        ajaxx.onreadystatechange = function(){
            if(ajaxx.readyState == 4 && ajaxx.status == 200){
                if( saida ){
                    if( typeof saida === "function" ){
                        saida();
                    }else{
                        document.querySelector(saida).innerHTML = this.responseText;
                    }
                }else{ saida = null; }
            }
        }
        ajaxx.open("POST",link,true);
        ajaxx.send(formvl); 
    },testes:function(){ alert(123); },
    get:function(url,func,saida){
        var loadding = document.createElement("div");
        loadding.className="carregar";
        loadding.setAttribute("style","width:100vw;height:100vh;position:fixed;top:0px;z-index:9999;display:inline-flex;align-items:center;justify-content:center;");
        document.body.appendChild(loadding);
        document.querySelector(".carregar").innerHTML = "<div align='center' style='width:fit-content;height:fit-content;padding:15px;border-radius:20px;background-color:#fff;'><img src='models/imgs/load2.gif' width='150'/></div>";
        
        document.querySelector(func.funcao).style.filter="blur(4px)";

        const xmlajax = new XMLHttpRequest();
        xmlajax.onreadystatechange = function(){
            if( this.readyState == 4 && this.status == 200 ){

                if( func.funcao == undefined && func.funcao == null ){ func.funcao = ""; }

                if( typeof func.funcao === "function" ){
                    func();
                }

                const reslt = this.responseText;

                setTimeout(function(){
                    document.querySelector(".dbites-grid").style.filter="blur(0px)";
                    n.alert("Produto cadastrado com sucesso!");
                   document.querySelector(saida).innerHTML = reslt;
                   document.querySelector(".carregar").remove();
                },2000);

            }else{
                console.error("Aconteceu algum erro de comunicação por favor tente novamente!");
            }
        }
        xmlajax.open("GET",url,true);
        xmlajax.send();
    }

}