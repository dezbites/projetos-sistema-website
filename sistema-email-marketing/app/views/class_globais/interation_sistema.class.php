<?php

class interation_sistema{

    public static function interation_js(array $jsgeral=[]){
        if( is_array($jsgeral) ){
            for( $i=0; $i < count($jsgeral); $i++){
               echo "<script type='text/javascript' src='".$jsgeral[$i]."'></script>";
            }
?>
            
<script>
    _.ajaxEnvio("post","#formemail","<?php echo PATH_MODELS.'/getInfo_cad_email.php'?>","#exibir-dados");
</script>
 
<?php        }
    }

}

?>