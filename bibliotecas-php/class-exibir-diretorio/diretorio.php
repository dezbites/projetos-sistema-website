<?php

class dir_file{

    //Exibe sub-diretorios e arquivos 
    public function scan_dir($dire){
        $dire  = $dire;
        $local = scandir($dire);
        for( $i = 0; $i < count($local); $i++ ){
            if($local[$i] != "." and $local[$i] != ".."){
                $vl[] = $local[$i]; 
            }
        }
        return $vl;
    }

    // Cria um diretorio
    public function criar_dir($dire){
        mkdir($dire);
    }

    // Deleta arquivo de um diretorio
    public function deleta_dir($dirrr){
        rmdir($dirrr);
    }

}

?>