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
            _.ajaxEnvio({
                met:"post",
                url:"<?php echo PATH_MODELS.'/getInfo_cad_email.php'?>",
                func:function(){
                    if( this.dados == 1 ){
                        not.cautions("Arquivo excede o tamanho maximo permitido de 10mb!");
                    }else{
                        wind(this.dados);
                    }
                }
            });
        }
</script>
 
<?php        }
    }

}

?>