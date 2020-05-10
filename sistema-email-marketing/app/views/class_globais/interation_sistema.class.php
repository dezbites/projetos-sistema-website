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
        window.onload=function(){
            
            menu();
            area_setor(".btemail","#area-email");
            chartsAreas();
            janela(`
                Jonas gomes da silva<br><table border='1'><tr><td>Jonas</td><td>gomes</td></tr></table>
            `);

            _.ajaxEnvio("post","#formemail","<?php echo PATH_MODELS.'/getInfo_cad_email.php'?>","#exibir-dados");
        }
</script>
 
<?php        }
    }

}

?>