//Desenvolvedor Jonas gomes versão 1.0
document.querySelector(".edit-size select").onchange = function(){
    document.querySelector(".edit-size input").value = this.value;
}

var obEditor = new objsF("#editor");
obEditor.fonte({"font":"#tipoletra","efont":"change"});
obEditor.fonteTamanho({"font":"#tamanholetra","efont":"change"},"#editor");

obEditor.fNis({"font":"#negrito","nis":"bold","efont":"click"});
obEditor.fNis({"font":"#italico","nis":"italic","efont":"click"});
obEditor.fNis({"font":"#sublinhado","nis":"underline","efont":"click"});

obEditor.fAlinhar({"font":"#format-left","align":"justifyLeft","efont":"click"});
obEditor.fAlinhar({"font":"#format-center","align":"justifyCenter","efont":"click"});
obEditor.fAlinhar({"font":"#format-right","align":"justifyRight","efont":"click"});

obEditor.fLink({"font":"#format-link","com":"createLink","url":"","efont":"click"},true);
obEditor.fLink({"font":"#quebra-link","com":"unLink","url":"","efont":"click"},false);

obEditor.fImagem({"font":"#link-imagem","com":"createLink","url":"","efont":"click"});

obEditor.fVideo({"font":"#link-video","com":"insertHTML","url":"","efont":"click"});

obEditor.fH({"font":"#h1","hs":"h1","efont":"click"});
obEditor.fH({"font":"#h2","hs":"h2","efont":"click"});
obEditor.fH({"font":"#h3","hs":"h3","efont":"click"});

obEditor.fCor({"font":"#cortext","efont":"click"});