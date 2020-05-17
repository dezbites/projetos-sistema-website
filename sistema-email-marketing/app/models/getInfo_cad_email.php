<?php

if($_FILES){

   echo file_get_contents($_FILES['email']['tmp_name']);
}else{
    echo "Tipo Texto";
}