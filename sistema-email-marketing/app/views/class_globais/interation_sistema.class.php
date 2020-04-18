<?php

class interation_sistema{

    public static function interation_js(array $jsgeral=[]){
        if( is_array($jsgeral) ){
            for( $i=0; $i < count($jsgeral); $i++){
               echo "<script type='text/javascript' src='".$jsgeral[$i]."'></script>";
            }
        }
    }

}

?>