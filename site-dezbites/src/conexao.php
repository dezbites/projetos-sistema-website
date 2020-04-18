<?php
//Configurações globais
require_once "globais.php";

//Classe para banco de dados
class conexao{

    //Conectar com a base de dados
    public function DBconectar(){
        $link = mysqli_connect(DB_HOSTNAME,DB_USER,DB_PASS,DB_NOME);
        return $link;
    }

    //Sair da conexao com a base de dados
    public function DBsair(){
        return mysqli_close($this->DBconectar());
    }

    //Faz tratamento de mysql injector ante hacker
    public function DBescape($valor){

        if(!is_array($valor)){
          return $valor = mysqli_real_escape_string($this->DBconectar(),$valor);
        }else{
            foreach($valor as $keyvalor => $val){
                $keyvalor = mysqli_real_escape_string($this->DBconectar(),$keyvalor);
                $val      = mysqli_real_escape_string($this->DBconectar(),$val);

                $valor[$keyvalor] = $val;
            }
            $stri = '';
            for( $i = 0; $i < count($valor); $i++ ){
                $stri .= "'".$valor[$i]."',";
            }
            $vl = preg_replace("/,$/i",'',$stri);
            return $vl;
        }
    }

    //Consulta na base de dados
    public function DBquery($consult,$valores = array()){
        $result = @mysqli_query($this->DBconectar(),$consult);
        return $result;
    }

    //Envia email para o site
    public function DBemail($email,$assunto,$men,$emailcli){
        $email_remetente = $email; 
        $assunto = '=?UTF-8?B?'.base64_encode("Assunto do e-mail").'?='; // evite erros de acentuação no título do e-mail.
        $headers = "MIME-Version: 1.1\n"; 
        $headers .= "Content-type: text/plain; charset=iso-8859-1\n"; 
        $headers .= "From: $email_remetente\n"; // remetente 
        $headers .= "Return-Path: $email_remetente\n"; // return-path 
        $headers .= "Reply-To: $emailcli\n"; // Endereço (devidamente validado) que o seu usuário informou no contato
        mail($email, $assunto, $men, $headers);
    }

    //teste
    public function Teste(){
        echo "Jonas";
    }
}

?>