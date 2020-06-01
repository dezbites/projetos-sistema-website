<?php
require_once("../../app/views/autoload.php");

if($_FILES){
    $endFile = $_FILES['email']['tmp_name'];
    $peso    = $_FILES['email']['size'];

    if(intval($peso) > 10000000){
        echo 1;
    }else{
        
    }
}else{
    echo "Tipo Texto";
}