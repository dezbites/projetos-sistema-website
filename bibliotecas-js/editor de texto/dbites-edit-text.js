//Desenvolvedor Jonas gomes versão 1.0
function objsF(said){

	//Ativa o modo edição
	var objsai = document.querySelector(said);
	objsai.designMode="On";

	//Função para eventos e saida de objeto e alteração de fonts
	this.fonte = function(obj){
		document.querySelector(obj.font).addEventListener(obj.efont,function(){
			document.execCommand("fontName",true,this.value);
		});
	}

	//Função para alterar o tamanho da fonte
	this.fonteTamanho = function(obj){
		document.querySelector(obj.font).addEventListener(obj.efont,function(){
			document.execCommand("fontSize",false,"7");
			var p = document.querySelectorAll("font");
			for(var i = 0; i < p.length; i++ ){
				if( p[i].size == "7" ){
					p[i].removeAttribute("size");
					p[i].style.fontSize = this.value;
				}
			}
		});

	} 

	//Função para eventos de negrito, italico e sublinhado
	this.fNis = function(obj){
		document.querySelector(obj.font).addEventListener(obj.efont,function(){
			document.execCommand(obj.nis);
		});
	}

	//Função para alinhar texto
	this.fAlinhar = function(obj){
		document.querySelector(obj.font).addEventListener(obj.efont,function(){
			document.execCommand(obj.align,false,"");
		});
	}

	//Função para criar link
	this.fLink = function(obj,exibir){
		var _div = document.createElement("div");
		document.querySelector(obj.font).addEventListener(obj.efont,function(){
			if( exibir == true ){
				var pt = prompt("Insira o link desejado: ","");
				var lk = document.execCommand(obj.com,true,pt);
				lk.target="_blank";
			}
			document.execCommand(obj.com,true,pt);
		});
	}

	//Função para criar uma imagem
	this.fImagem = function(obj){
		document.querySelector(obj.font).addEventListener(obj.efont,function(){
			var pt = prompt("Insira o link da imagem: ","");
			document.execCommand("insertImage",true,pt);
		});
	}

	//Função para criar um vídeo obs: só aceita vídeo do youtube.
	this.fVideo = function(obj){
		document.querySelector(obj.font).addEventListener(obj.efont,function(){
			var pt = prompt("Insira o link do vídeo: ","");
			pt     = pt.slice(32); 
			document.execCommand("insertHTML",true,'<div class="div-line-block"><iframe width="560" height="315" src="https://www.youtube.com/embed/'+pt+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><div>');
		});
	}

	//Função para criar o h1 ao h3
	this.fH = function(obj){
		document.querySelector(obj.font).addEventListener(obj.efont,function(){
			document.execCommand("formatBlock",true,obj.hs);
		});
	}

	//Função para mudar a cor da letras
	this.fCor = function(obj){
		document.querySelector(obj.font).addEventListener(obj.efont,function(){

			var cfonte = document.createElement('div');
			cfonte.id='cor';
			cfonte.className='cor';
			if( document.querySelector("#cor") == null ){
				document.body.appendChild(cfonte);
			}
			var cp = document.querySelector("#cor");

			var cores = [
			"#000000","#003366","#336699","#3366CC","#003399","#000099","#0000CC",
			"#000066","#006666","#006699","#0099CC","#0066CC","#0033CC","#0000FF",
			"#3333FF","#333399","#669999","#009999","#33CCCC","#00CCFF","#0099FF",
			"#0066FF","#3366FF","#3333CC","#666699","#339966","#00CC99","#00FFCC",
			"#00FFFF","#33CCFF","#3399FF","#6699FF","#6666FF","#6600FF","#6600CC",
			"#339933","#00CC66","#00FF99","#66FFCC","#66FFFF","#66CCFF","#99CCFF",
			"#9999FF","#9966FF","#9933FF","#9900FF","#006600","#00CC00","#00FF00",
			"#66FF99","#99FFCC","#CCFFFF","#CCCCFF","#CC99FF","#CC66FF","#CC33FF",
			"#CC00FF","#9900CC","#003300","#009933","#33CC33","#66FF66","#99FF99",
			"#CCFFCC","#FFFFFF","#FFCCFF","#FF99FF","#FF66FF","#FF00FF","#CC00CC",
			"#660066","#336600","#009900","#66FF33","#99FF66","#CCFF99","#FFFFCC",
			"#FFCCCC","#FF99CC","#FF66CC","#FF33CC","#CC0099","#993399","#333300",
			"#669900","#99FF33","#CCFF66","#FFFF99","#FFCC99","#FF9999","#FF6699",
			"#FF3399","#CC3399","#990099","#666633","#99CC00","#CCFF33","#FFFF66",
			"#FFCC66","#FF9966","#FF6666","#FF0066","#CC6699","#993366","#999966",
			"#CCCC00","#FFFF00","#FFCC00","#FF9933","#FF6600","#FF5050","#CC0066",
			"#660033","#996633","#CC9900","#FF9900","#CC6600","#FF3300","#FF0000",
			"#CC0000","#990033","#663300","#996600","#CC3300","#993300","#990000",
			"#800000","#993333","#400000","#DAF7A6","#f2f2f2","#e6e6e6","#d9d9d9",
			"#cccccc","#bfbfbf","#b3b3b3","#a6a6a6","#999999","#8c8c8c","#808080",
			"#737373","#666666","#595959","#4d4d4d","#404040","#333333","#262626",
			"#1a1a1a","#0d0d0d","#000000"
		];
			
			var divs = "";
			for(var p = 0; p < cores.length; p++){
				divs += "<button alt='"+cores[p]+"' style='width:15px;height:15px;display:inline-block;background-color:"+cores[p]+";'>&nbsp;</button>";
			}

			cp.innerHTML = "<center><h2 style='font-family:Arial;color:#8e8e8e;'>Cor da fonte</h2></center>"+divs;
			for(var i = 0; i < cores.length; i++){
				cp.querySelectorAll("button")[i].onclick=function(){
					document.execCommand("foreColor",true,this.getAttribute('alt'));
					if( cp.style.display == "block" ){
						cp.style.display='none';
					}else{
						cp.style.display='block';
					}
					cp.remove();
				}
			}
		});
	} 

}