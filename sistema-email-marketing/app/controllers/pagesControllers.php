<?php

class pagesControllers{

    function app($vls){
        $pageApp = [
            'home'
        ];

        if(!empty($vls)){
            if( !in_array($vls,$pageApp) ){
                require("app/views/home.php");
            }else{
                if( in_array($vls,$pageApp) ){
                    require("app/views/".$vls.".php");
                }else{
                    require("app/views/home.php");
                }
            }
        }
    }



}