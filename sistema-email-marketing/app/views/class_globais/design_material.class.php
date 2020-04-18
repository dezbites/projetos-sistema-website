<?php

class design_material{

    public static function style_css(array $para=[]){
        if( is_array($para) ){
            for( $i=0; $i < count($para); $i++){
               echo "<link rel='stylesheet' type='text/css' href='".$para[$i]."' />";
            }
        }
    }

}


?>