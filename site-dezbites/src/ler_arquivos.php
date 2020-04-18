<?php
    class ler_arquivos{
        public function ler_arq($endArq){            
            $end  = $endArq;
            $html = fopen($end,"r");
            return fread($html,filesize($end));
            fclose($html);
        }   
    }
?>