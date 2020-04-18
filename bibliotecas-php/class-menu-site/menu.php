<?php

class menu_si{
	public function menu(){
?>	
		<!--Menu do topo-->
		<div dbit-menu="menu-line">
			<div></div>
			<div>
				<ul class="menu-line">
					<li>
						
					</li>
					<li>Tel: (81) 98765-9876</li>
					<li>Webmail</li>
					<li>Boleto</li>
				</ul>
			</div>
		</div>

		<!--Menu baixo-->
		<div dbit-menu="menu-bottom">
			<div class="item-1" align="center">
				<img style="vertical-align:middle;" width="45" src="https://www.getmonero.org/press-kit/symbols/monero-symbol-800.png" />
			</div>
			<div class="item-2">
				<ul class="menu">
					<li>Home</li>
					<li>
						Hospedagem
						<ul>
							<li>Email Marketing</li>
							<li>Reg. domínio</li>
						</ul>
					</li>
					<li>Contato</li>
					<li>Orçamento</li>
					<li>Map</li>
				</ul>
			</div>
		</div>

<?php }
	public function __construct(){
		$this->menu();
	}
}

new menu_si();

?>