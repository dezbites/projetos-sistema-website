<?php
require_once "globais.php";

//Classe para banco de dados
class conexao_bd{

    //Conectar com a base de dados
    public function DBconectar(){
        $link = mysqli_connect(DB_HOSTNAME,DB_USER,DB_PASS,DB_NOME);
        /*/if(mysqli_error()){
            return mysqli_error();
        }*/
        return $link;
    }

    //Sair da conexao com a base de dados
    public function DBsair(){
        return mysqli_close($this->DBconectar());
    }

    //Faz tratamento de mysql injector ante hacker
    public function DBescape($valor){
        $link = $this->DBconectar();
        if(!is_array($valor)){
          return $valor = mysqli_real_escape_string($link,$valor);
        }else{
            foreach($valor as $keyvalor => $val){
                $keyvalor = mysqli_real_escape_string($link,$keyvalor);
                $val      = mysqli_real_escape_string($link,$val);

                $valor[$keyvalor] = $val;
            }
            for( $i = 0; $i < count($valor); $i++ ){
                $stri .= "'".$valor[$i]."',";
            }
            $vl = preg_replace("/,$/i",'',$stri);
            $vl = str_replace('"','',$vl);
            return $vl;
        }
    }

    //Consulta na base de dados
    public function DBquery($consult,$valores = array()){
        $link   = $this->DBconectar();
        $result = @mysqli_query($link,$consult);
        return $result;
    }

    //Envia email para o site
    public function DBemail($email,$quemenvio,$assunto,$men){
        $assunto = "Contratação de serviço"; // evite erros de acentuação no título do e-mail.
        $headers = 'MIME-Version: 1.0'."\r\n"; 
        $headers .= "Content-type: text/html; charset=utf-8\n"; 
        $headers .= 'From:'.$quemenvio.'\n'; // remetente 
        //$headers .= "Return-Path: $email_remetente\n"; // return-path 
        //$headers .= "Reply-To: $emailcli\n"; // Endereço (devidamente validado) que o seu usuário informou no contato
        $envio = mail($email, $assunto, $men, $headers);
    }

}

?>