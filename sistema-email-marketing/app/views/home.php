<!DOCTYPE html>
<html lang="pt-br">
<head>
<?php
  require_once("autoload.php");
  //require_once("class_globais/design_material.class.php");
  $design_tre = new design_material();
  $scriptJs   = new interation_sistema();

  $design_tre::style_css([
      "app/views/class_globais/css/css_geral.css"
  ]);
  
?>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MailTubes</title>
</head>
<body>
  <div class="container">
    <div class="topo">
    </div>
    <div class="logo">
      <div>
        Logotipo
      </div>
    </div>
    <div class="lateral">
        <a data-menu="home" target="_self"><div><img src="app/views/imgs/house.png" />Dashboard</div></a>
        <a data-menu="cadastrar-emails" target="_self"><div><img src="app/views/imgs/email.png" />Cadastrar Emails</div></a>
        <a data-menu="enviar-emails" target="_self"><div><img src="app/views/imgs/send-email.png" />Enviar Emails</div></a>
        <a data-menu="templante" target="_self"><div><img src="app/views/imgs/code-design.png" />Templante</div></a>
        <a data-menu="captura-emails" target="_self"><div><img src="app/views/imgs/capturar.png" />Capturar Emails</div></a>
    </div>
    <div class="corpo">
      <div class="dashboard">
          Dashboard
      </div>
      <div class="home menu" data-secao="Dashboard">
          <div class="dbites-cell" id="chart-1">
            <h4>
              Emails Cadastrados
            </h4>
            <canvas></canvas>
            <span></span>
          </div>
          <div class="dbites-cell" id="chart-2">
            <h4>
              Emails Enviados
            </h4>
            <canvas></canvas>
            <span class="titulo">100%</span>
          </div>
          <div class="dbites-cell" id="chart-3">
            <h4>
              Emails Clicados
            </h4>
            <canvas></canvas>
            <span class="titulo">100%</span>
          </div>
          <div class="dbites-cell dbites-height">
              Nenhum dado encontrado
          </div>
          <div class="dbites-cell dbites-height">
              Nenhum dado encontrado
          </div>
      </div>
      <div class="cadastrar-emails menu" data-secao="Cadastrar emails">
          <div class="arquivos">
                <div>
                    <input type="button" class="btemail" area-setor="novo email" style="width:120px;" value=" novo email ">
                    <input type="button" class="btemail" area-setor="importar email" input-verde style="width:120px;" value=" importar emails ">
                    <div id="modo-email" align="center">
                        <h1>
                          Novos cadastros
                        </h1>
                        <p>
                          selecione o melhor modo para cadastrar seus emails
                        </p>
                        <form action="" enctype="" method="post">
                            <div class="emails-cad" area-setor="novo email">
                                    <input type="email" name="" id="area-email" placeholder=" cadastre seu email ">
                                    <input type="submit" id="area-email-titulo" value=" Cadastrar ">
                            </div>
                        </form>
                    </div>
                </div>
          </div>
      </div>
      <div class="enviar-emails menu" data-secao="Enviar emails">
          Enviar emails
      </div>
      <div class="templante menu" data-secao="Templante">
          Templante
      </div>
      <div class="captura-emails menu" data-secao="Captura de emails">
      Captura de emails
      </div>
      <div class="apresentacao">
        <div class="textos">
          <div>
              <div class="foguete">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" viewBox="0 0 221.444 167.128"><path d="M956.807,374.5l36.211,21.036L1132.292,325.9l-115.6,89.135v34.818l30.64-12.535,30.64,19.5,100.277-167.128Z" transform="translate(-956.807 -289.688)" fill="#a4d4c9"/></svg>
              </div>
              <h1>
                Seja bem vindo!
              </h1>
              <p style="margin-top:-10px;">
                Esperamos que você tenha uma ótima experiência com a nossa plataforma!
              </p>
          </div>
          <div>
              <div class="foguete">
                  <img src="app/views/imgs/email-marketing.png" style="width:120px;">
              </div>
              <h1>
                Objetivo da <strong>MailTube</strong>
              </h1>
              <p style="margin-top:-10px;">
                  A MailTubes foi desenvolvida pensando em você.<br>
                  Com a nossa plataforma, ficou mais fácil de divulgar seus eventos, produtos ou serviços atravéz do <strong>email marketing.</strong>
              </p>
          </div>
          <div>
              <div class="foguete">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" viewBox="0 0 221.444 167.128"><path d="M956.807,374.5l36.211,21.036L1132.292,325.9l-115.6,89.135v34.818l30.64-12.535,30.64,19.5,100.277-167.128Z" transform="translate(-956.807 -289.688)" fill="#a4d4c9"/></svg>
              </div>
              <h1>
                Seja feliz : )
              </h1>
              <p style="margin-top:-10px;">
                Agora que você já conheceu um pouco sobre nós, está na hora de começar a divulgar.<br>
                Começe agora mesmo!
              </p>
          </div>
        </div>
        <input id="avanca" type="button" value=" AVANÇAR >> ">
      </div>
    </div>
  </div>
  <?php
    $scriptJs::interation_js([
      "app/views/class_globais/js/dbites-ajax.js",
      "app/views/class_globais/js/dbites-alerts.js",
      "app/views/class_globais/js/dbites-window.js",
      "app/views/class_globais/js/controlador-geral.js"
    ]);
  ?>
</body>
</html>