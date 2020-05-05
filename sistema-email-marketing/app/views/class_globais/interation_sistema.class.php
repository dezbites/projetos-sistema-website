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
            var ler = new FileReader();
            ler.onload = function(){
                document.querySelector("#exibir-dados").innerHTML = ler.result;
            }
            ler.readAsText(fileinp.files[0]);
        }
    _.ajaxEnvio("post","#formemail","<?php echo PATH_MODELS.'/getInfo_cad_email.php'?>","#exibir-dados");
</script>
 
<?php        }
    }

}

?>