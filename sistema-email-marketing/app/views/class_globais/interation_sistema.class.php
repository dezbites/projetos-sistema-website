<?php

class interation_sistema{
    public static function interation_js(array $jsgeral=[]){
        if( is_array($jsgeral) ){
            for( $i=0; $i < count($jsgeral); $i++){
               echo "<script type='text/javascript' src='".$jsgeral[$i]."'></script>";
            }
?>
            
<script>
           window.onload=function(){
            
            menu();
            area_setor(".btemail","#area-email");
            chartsAreas();
            wind(`
                Jonas gomes da silva<br><table border='1'><tr><td>Jonas</td><td>gomes</td></tr></table>
            `);
            document.querySelector("#formemail").onsubmit=function(){
                _.ajaxEnvio("post","<?php echo PATH_MODELS.'/getInfo_cad_email.php'?>",function(){
                    alert(1);
                });
                
                return false;
            }
        }
</script>
 
<?php        }
    }

}

?>