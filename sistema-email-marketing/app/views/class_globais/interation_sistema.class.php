<?php

class interation_sistema{

    public static function interation_js(array $jsgeral=[]){
        if( is_array($jsgeral) ){
            for( $i=0; $i < count($jsgeral); $i++){
               echo "<script type='text/javascript' src='".$jsgeral[$i]."'></script>";
            }
?>
            
<script>
   
       /* var openFile = function(event) {
            var input = event.target;

            var reader = new FileReader();
            reader.onload = function(){
                var text = reader.result;
                console.log(reader.result);
            };
            reader.readAsText(input.files[0]);
        }; */
        const file = document.querySelector("#area-email");
        file.onchange = function(){
            openviewFile(event);
        }

        function openviewFile(event){
            var fileinp = event.target;
            const extensao = ["text/plain"];
            //for(let i=0;i<extensao.length;i++){

                if(fileinp.files[0].type == extensao[0]){
                    var ler = new FileReader();
                    document.querySelector("#exibir-dados").innerHTML="carregando...";
                    ler.onload = function(){
                        const exp = /\n/g;
                        var textotrado = new String(ler.result);
                        var subst = textotrado.replace(exp,"<br>").split("<br>");
                        document.querySelector("#exibir-dados").innerHTML = subst.length;
                    }
                    ler.readAsText(fileinp.files[0]);
                    return;
                }else{
                    file.value="";
                    not.cautions("Desculpe mais só é permitido o tipo de arquivo txt!");
                }
            //}
        }
    _.ajaxEnvio("post","#formemail","<?php echo PATH_MODELS.'/getInfo_cad_email.php'?>","#exibir-dados");
</script>
 
<?php        }
    }

}

?>