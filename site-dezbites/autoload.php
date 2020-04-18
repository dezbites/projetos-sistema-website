<?php

   spl_autoload_register(
       function($classe){
            $end = "src/";
            require_once $end.$classe.".php";
       }
    );

?>
