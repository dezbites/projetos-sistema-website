<?php
require_once "conexao.php";

class tags extends conexao_bd{
	public function subTags(array $tag,$end){
		$em    = file_get_contents($end);
		$valor = str_replace(array_keys($tag), $tag, $em);
		file_put_contents($end,$valor);
	}

	public function sub_info_bd(){
		$this->subTags([
				"#nome#"=>"Sofia",
				"#empresa#"=>"Chulo dez dez",
				"#esloga#"=>"design e tecnologia",
				"#teste#"=>"será",
				"#descricao#"=>"Vamos lá",
				"#telefone#"=>"(81) 3475-1822"

			],"tags.html");
	}

}

$t = new tags();
$t->sub_info_bd();
/*$t->arq("#nome#","Jonas","tags.html");
$t->arq("#empresa#","Dezbites","tags.html");
$t->arq("#esloga#","design e tecnologia","tags.html");
$t->arq("#descricao#","
		Esse é um texte de alteração <br>
		teste
	","tags.html")
*/
?>