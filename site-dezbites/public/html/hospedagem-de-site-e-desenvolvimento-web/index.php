<!DOCTYPE html>
<html lang="pt-br">
<head>
    <?php
        require_once("../../../autoload.php");
        $me = new modulos();
        
        $me->metas(["descricao"=>"Jonas gomes",
        "titulo"=>"Dezbites",
        "linkpage"=>"https://www.dezbites.com",
        "nome"=>"Dezbites",
        "palavra_chave"=>"Hospedagem de site"]);
    ?>
    <link rel="stylesheet" href="../../css/includes.css">
</head>
<body>

    <!--Campo obrigatorio-->
    <?php $me->menu(); ?>

    <div class='slider-mi'>
        <div class='container-cell'>
            <div class='block-1'>
            </div>
            <div class='block-1'>
                <div>
                    <div class="imagens">
                        <img src="../../imgs/mascote.png" alt="Mascote-da-nossa-empresa">
                    </div>
                    <div class="imagens">
                        <img src="../../imgs/desenho-computador.png" alt="Desnho-de-computador">
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!--Campo obrigatorio-->
    <?php new scriptjs(); ?>

    <script>
        _.slider(".slider-mi",["../../imgs/design-site.jpg"]);
    </script>
</body>
</html>