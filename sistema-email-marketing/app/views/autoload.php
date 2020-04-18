<?php

function __autoload($valor){
    if( file_exists("app/views/class_globais/".$valor.".class.php") ){
        return require_once("app/views/class_globais"."/".$valor.".class.php");
    }
}

?>