<?php
require "app/controllers/pagesControllers.php";

$pageName      = (!isset($_GET['controllers']) ? 'pagesControllers' : $_GET['controllers']."Controllers");
$actionSistema = (!isset($_GET['action']) ? 'home' : $_GET['action'] );

$exibir = new $pageName;
$exibir->app($actionSistema);