
const _ = {
	vl:function(obj,vla){
		var lof 	 = document.querySelectorAll(obj);
		var vlsArray = [];
		if(vla === undefined){ vla="val"; }
		if(lof){
			if( lof.length>1 ){
				for(var i=0;i<lof.length;i++){
					if( lof[i].value === undefined ){
						if(vla=='text'){
							vlsArray[i]=lof[i].innerText;
						}else{
							if(vla=='html'){
								vlsArray[i]=lof[i].innerHTML;
							}
						}
					}else{
						vlsArray[i]=lof[i].value;
					}
				}
				return vlsArray;
			}else{
				if(vla=='text'){
					return lof[0].innerText;
				}else if(vla=='html'){
					return lof[0].innerHTML;
				}else if(vla=='val'){
					return lof[0].value;
				}
			}
		}
	},
	acao:function(obj,evento,fc){
		var objs = document.querySelectorAll(obj);
		if(objs){
			if( objs.length > 1 ){
				for( var i=0; i<objs.length;i++ ){
					objs[i].addEventListener(evento,fc);
				}
			}
			objs[0].addEventListener(evento,fc);
		}
	},
	lp:function(obj,callback){
		var wobj  = document.querySelectorAll(obj);
		for(var i = 0; i < wobj.length; i++){
			callback.call(wobj[i]);
		}
	},
	objEdit:function(obj){
		var objs = document.querySelectorAll(obj);
		if(objs){
			if(objs.length>1){	
				for(var i=0;i<objs.length;i++){
					objs[i].contentEditable = "true";
				}
			}
			objs[0].contentEditable = "true";
		}
	},
	pAnimar:function(obj,anima,atio){
		var top      = ((atio === undefined) ? true : atio);
		var objs 	 = document.querySelector(obj);
		var topini   = anima.topIni;
		var leftini  = anima.leftIni;
		var rotacao  = parseInt(anima.rotacao);

		if( top == true ){
			objs.setAttribute("style","position:absolute;top:"+topini+"vh;left:"+leftini+"vw;transform:rotate("+rotacao+"deg);");
			
			var y 				 =  (window.pageYOffset) / anima.veloc;	
			objs.style.top  	 = topini-y+"vh";
			objs.style.transform = "rotate("+(rotacao) * y+"deg)";
		}
	},
	wOnload:function(funcs){
		window.onload=function(){
			funcs();
		}
	},
	wScroll:function(funcs){
		window.onscroll=function(){
			funcs();
		}
	},
	slider:function(objs,urlImg,propt,ativa){
		if( urlImg === undefined ){
			if( document.body.style.overflowX != "hidden" ){document.body.style.overflowX = "hidden"}
			
			urlImg 		 = null;
			ativa  		 = false;
			qucount 	 = 0;
			var olj 	 = document.querySelectorAll(objs)[0];
			var objAlign = olj.querySelector(".slider-id");
			var objQt    = objAlign.querySelectorAll("div");
			
			if( objQt.length >= 1 ){
				objAlign.style.display    = "flex";
				objAlign.style.height  	  = (( propt === undefined ) ? "100vh" : propt.alt );
				objAlign.style.width   	  = objQt.length+"00vw";
				objAlign.style.transition = "all 0.3s";
				
				for(var i = 0; i < objQt.length; i++){
					objQt[i].style.width = "100vw";
				} 

				setInterval(function(){
					objAlign.style.marginLeft = "-"+qucount+"00vw";
					qucount++;
					if( qucount > objQt.length - 1){
						qucount = 0;
					}

				},( (propt == undefined) ? 3000 : propt.tempo ));

				console.warn("Para o bom funcionamento no modo manual será preciso manipular todo o slider com css puro, caso queira existe o modo automatico aonde a biblioteca cria automaticamente o slider.");
				
			}

		}else{
			if(urlImg.length > 1){
				
				var bgc = document.querySelectorAll(objs)[0];
				bgc.style.position = "absolute";
				bgc.style.top      = "0";
				bgc.style.zIndex  = "-1";
				if( ativa === undefined ){ ativa = true; }

				if( ativa ){
					var corpo = document.querySelector("body");
					if( corpo.style.margin   != "0" ){
						corpo.style.margin    = "0";
						corpo.style.overflowX = "hidden";
					}
					var img   = urlImg;
					var altur = (propt === undefined ? "100vh" : propt.alt);
					var cond  = (ativa === undefined ? true : ativa );
					var count = 0;
					if( img ){
						var divs = "<div class='div-alinhar' style='display:flex;width:"+img.length+"00vw;height:"+altur+";transition:all 0.6s;'>";
						for( var i = 0; i < img.length; i++ ){
							divs += "<div style='width:100%;height:100%;background-image:url("+img[i]+");background-size:cover;background-position:center;background-repeat:no-repeat;'>&nbsp;</div>";
						}
						divs    += "</div>";
						document.querySelectorAll(objs)[0].innerHTML = divs;

						if( cond ){
							var objani = document.querySelector(".div-alinhar");
							setInterval(function(){
								objani.style.marginLeft = "-"+count+"00vw";
								count++;
								if( count > img.length - 1 ){
									count = 0;
								}
							},( propt.tempo === undefined ) ? 3000 : propt.tempo * 1000 );
						}
						
					}
				}
			}
			var bg = document.querySelectorAll(objs)[0];
			bg.setAttribute("style","position:absolute;top:0;z-index:0;width:100%;height:100%;background-image:url('"+urlImg[0]+"');background-size:cover;background-position:center;background-repeat:no-repeat;");

		}
	},
	//Ajax
	infA:function(){

	},
	oc:function(obj,fun){
		var i = 0;
		var p = document.querySelectorAll(obj);
		if(p){
			for(i in p){
				p[i].onclick = fun;
			}
		}
		p[0].onclick = fun;

	},
	okd:function(){

	},
	hor:function(){

	},
	dat:function(){

	},
	cpfCnpj:function(){

	},
	cPostal:function(){

	},
	telRes:function(){

	},
	telCel:function(){

	},
	menuBar:function(tituloBar,corfundo){
		var ojmen = document.querySelectorAll(".dbites-menuBar")[0];
		if(ojmen != undefined){
			var titl     = tituloBar;
			var dContent = "<div class='container'>";
			for(var i = 0; i < titl.length; i++){
				dContent += "<div>";
				dContent += titl[i];
				dContent += "</div>";
			}
			dContent += "</div>";
			ojmen.innerHTML = dContent;
			if(corfundo == undefined){ corfundo = true; }
			if(corfundo == false){ ojmen.style.backgroundColor="transparent"; }
		}
	},
	menuTop:function(titulosMenu,corfundo){
		var ojmen = document.querySelectorAll(".dbites-menu")[0];
		if( ojmen != undefined){
			var m   = titulosMenu;
			var mli = "<div><img src='https://www.dezbites.com/site/logo.png' /></div>";
			mli += "<div class='mob-submenu'><ul>";
			for( var i = 0; i < m.length; i++ ){
				if( Array.isArray(m[i]) ){

					mli += "<li>"+m[i][0]+"&#9662;<ul>";
					for(var j = 1; j < m[i].length; j++ ){
						mli += "<a><li dbites-sub>"+m[i][j]+"</li></a>";
					}
					mli += "</ul></li>";

				}else{
					mli += "<a><li>"+m[i]+"</li></a>";
				}
			}
			mli += "</ul></div><div class='mobile-menu'>&equiv;</div>";

			ojmen.innerHTML = mli;
			if(corfundo == undefined){ corfundo = true; }
			if(corfundo == false){ ojmen.style.backgroundColor = "transparent"; }
			var submm = ojmen.querySelectorAll("div ul li span");
			for( var p = 0; p < submm.length; p++ ){
				if(submm[p]){
				   var pe = submm[p].parentElement;
				   pe.parentElement.href=submm[p].getAttribute('link');
				   pe.parentElement.target=submm[p].getAttribute('tg');
				}
			}
			var acti = document.querySelector(".mob-submenu");
			document.querySelector(".dbites-menu .mobile-menu").onclick = function(){
				if(acti.style.display == "block"){
					acti.style.display = "none";
					acti.removeAttribute('style');
				}else{
					acti.style.display = "block";
				}
			}
		}
	},
	tabela:function(){

	}
};