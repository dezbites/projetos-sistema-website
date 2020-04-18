<?php 

require_once("conexao.php");

$cone = new conexao_bd();

$dados = $_REQUEST;
$cone->DBemail("marcelo.santos@pmacursoseconsultorias.com",$dados['Email'],"Interessado no e-book","
    <strong>Nome:</strong> {$dados['Nome']}<br>
    <strong>Email:</strong> {$dados['Email']}<br>
    <strong>Telefone:</strong> {$dados['Telefone']}<br>
");
echo "
    <div style='width:100%;text-align:center;' align='center'>
        <h2>
            Obrigado agora você pode fazer o download do seu e-book
        </h2>
        <a href='e-book.pdf'>Faça aqui seu download</a>
    </div>
    <script>
        alert('Obrigado por se cadastrar!');
    </script>
";