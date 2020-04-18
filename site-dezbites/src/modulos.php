<?php 
class modulos{
    public function menu(){
        echo "<div class='dbites-menuBar'></div><div class='dbites-menu'></div>";
    }

    public function metas($mer = array()){
?>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta http-equiv="X-UA-Compatible" content="IE=7">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="<?php echo $mer["descricao"]; ?>" >
        <meta name="keywords" content="<?php echo $mer["palavra_chave"]; ?>">
        <meta name="author" content="Jonas Gomes">
        <meta name="robots" content="index">

        <!-- Google+ / Schema.org -->
        <!-- <meta itemprop="name" content="">
        <meta itemprop="description" content="" >
        <meta itemprop="image" content="https://exemplo.com/imagem.png">
        <link href="https://plus.google.com/+SuaPagina" rel="publisher">-->
        
        <!-- Open Graph Facebook -->
        <meta property="og:title" content="<?php echo $mer["titulo"]; ?>">
        <meta property="og:description" content="<?php echo $mer["descricao"]; ?>" >
        <meta property="og:url" content="<?php echo $mer["linkpage"]; ?>">
        <meta property="og:site_name" content="<?php echo $mer["nome"]; ?>"/>
        <meta property="og:type" content="website">
        <meta property="og:image" content="https://exemplo.com/imagem.png">

        <!-- Twitter -->
        <meta name="twitter:title" content="<?php echo $mer["titulo"]; ?>">
        <meta name="twitter:description" content="<?php echo $mer["descricao"]; ?>" >
        <meta name="twitter:url" content="<?php echo $mer["linkpage"]; ?>">
        <meta name="twitter:card" content="summary">
        <meta name="twitter:image" content="https://exemplo.com/imagem.png">
        <!-- <meta name="twitter:creator" content="@estevanmaito"> -->
        <meta name="twitter:site" content="@empresa">
<?php }

    public function rodape(){

    }
}
?>