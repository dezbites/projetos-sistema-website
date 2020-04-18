<?php
    class scriptjs{

        private function scriptGeral(){
            $this->scriptMenubaixo();
?>
                <script>
                    _.menuTop([
                        ['Hospedagem',
                        'Planos de Hospedagem',
                        'Hospedagem wordpress',
                        'Hospedagem SSD']
                        ,['Domínio',
                        'Registrar novo domínio',
                        'Verificar disponibilidade'],
                        ['Revenda',
                        'Hospedagem de site'
                        ],
                        'Construtor de site',
                        'Loja Virtual',
                        ['Tecnologias usadas',
                        'Javascript',
                        'php',
                        'html5',
                        'css3',
                        'Dezbites'
                        ]
                    ],false);
                    _.menuBar([
                        '<img class="iconBar" src="../../imgs/icons-24px/email.png"> sac@dezbites.com',
                        '<img class="iconBar" src="../../imgs/icons-24px/telefone.png" /> (81) 99655-5060',
                        'Blog'
                    ],false);
                </script>
            
<?php  }

        private function scriptMenubaixo(){
            $aty = ["../../js/dbites-js-tecnologia.js"];
            for($i = 0; $i < count($aty); $i++){
                echo "<script src='".$aty[$i]."'></script>";
            }
        }

        public function __construct(){
            $this->scriptGeral();
        }
    }
?>