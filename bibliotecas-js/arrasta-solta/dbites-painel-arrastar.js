function objMove(){

    var idNome = null;

    //Retorna ao valor padrao
    this.iniPadrao = function(event){
        event.preventDefault();
    }

    //Inicia o processo de arrastar
    this.iniMove   = function(idobj,event){
        idNome = idobj;
        event.dataTransfer.setData(idNome,event.target.id);
    } 

    //Inicia o processo de soltar
    this.iniSoltar = function(idobj,event){
        event.preventDefault();
        var objId        = document.createElement(idobj.nome);
        objId.id         = idNome; 
        objId.className  = idNome;
        var t = event.dataTransfer.getData(idNome);
        //objId.className  = ;
        event.target.appendChild(objId);

        var mh    = document.querySelectorAll(".dbites-menu-h");
        //Menus botões
        var menuh = ['Home','Contato','Hospedagem','Fale Conosco'];

        var mDivs  = "<div><img src='https://www.dezbites.com/site/logo.png' /></div><div><ul>";

        for(var i = 0; i < menuh.length; i++){
            mDivs += "<li>"+menuh[i]+"</li>";
        }

        mDivs += "</ul></div>";
        mh[mh.length-1].innerHTML = mDivs;
    }
    
}