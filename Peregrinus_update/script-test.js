function loadHeader() {

    const headerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <title>Document</title>
   
    <!-- MUDAR ESSA CONFIG PARA UM STYLE.CSS-->
    <style>
        body{
           
            color-scheme: dark
        }
        #logo a {
            text-decoration: none;
            color: inherit;
        }
       /* configuração do search */ 
        .search-form {
            display: flex;
            align-items: center; 
            width: 100%; 
            max-width: 600px;
            margin: 0 auto; 
            min-width: 20%;
        }
        /* faz um grupo (search + botão + loja)*/
        .input-group {
            display: flex;
            align-items: center; 
            flex-grow: 1; 
        }
        /*search*/
        .input-group input {
            flex-grow: 1; 
        }
        /* config do nome LOJA */
        .nav-link-loja {
            margin-left: 500px; /* Adiciona margem à esquerda do link "LOJA" */
            display: flex;
            align-items: center;
            color: #00AFEF;
        }

        .user-icon {
            font-size: 20px; /* tamanho do ícone */
            height: 25px; /* altura  ícone */
            width: 25px; /* largura  ícone */
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%; 
            background-color: #f0f0f0; 
            color: #333; 
            border: 2px solid #ddd; /* Borda ao redor do ícone */
            margin: 0 10px; 
        }
        .fa-shopping-cart{
            color: #00AFEF;
        }
        .btn-outline-primary {
            color: #00AFEF;
            border-color: #00AFEF;
        }
        .btn-outline-primary:hover{
            background-color: #f0f0f0;
            color: #00AFEF;
        }
        .fa-shopping-cart:hover{
            color: #ffffff;
        }
        .nav-link-loja:hover{
            color: #ffffff;
        }

        /*telas diferentes*/
        @media only screen and (max-width: 500px) {
            .container-fluid {
                flex-direction: column; 
                align-items: center; 
            }
            #logo {
                margin-bottom: 15px; 
            }
            .search-form {
                margin: 0; 
            }
            .d-flex {
                width: 100%; 
                justify-content: center; 
            }
            .fa-shopping-cart, .nav-link-loja, .user-icon{
                display: none;
            }
            
        }
    </style><!-- FIM MUDAR ESSA CONFIG PARA UM STYLE.CSS-->
</head>
<body>
    <div id="header" class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid d-flex justify-content-between align-items-center">
            <!-- Logo -->
            <div id="logo">
                <a href="#">
                    <img src="../imagens-hf/logo_azul_final.svg" alt="Logo" height="40">
                </a>
            </div>

            <!-- Search Form -->
            <form class="search-form" action="buscar.py">
                <div class="d-flex align-items-center justify-content-between input-group">
                    <input type="text" id="pesquisa" class="form-control" placeholder="Buscar">
                    <button class="btn btn-outline-primary" type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                    <a class="nav-link nav-link-loja px-3" href="#">LOJA</a>
                </div>
            </form>

            <!-- Right Side Icons -->
            <div class="d-flex align-items-center">
                <a class="nav-link" href="#">
                    <i class="container fas fa-shopping-cart"></i>
                </a>
                <a class="nav-link" href="#">
                    <i class="fas fa-user user-icon"></i>
                </a>
            </div>
        </div>
    </div>


    `;
    document.querySelector('body').insertAdjacentHTML('afterbegin', headerHTML);
}


function loadFooter() {
    
    const footerHTML = `

     <style>
       
        footer { /* Footer completinho */
            background-color: #ffffff;
            color: #fff;
           
      
        }
        .footer-content { /* Footer completão */
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            
        }
        .logo img { /* Logo lado esquerdo */
        
            max-width: 200px;
        }
        .icons i{  /* Icones do cartão */
            margin: 0 10px;
            font-size: 36px; 
            color: #00AFEF;
        }
        .icons p{
            color: #00AFEF;
        }
        .footer-links a { /* Links lado Direito */
            color: #00AFEF;
            text-decoration: none;
            margin: 5px 0;
            display: block;
        }
        /* Links lado Direito mouse por cima */
        .footer-links a:hover {
            text-decoration: underline;
        }
        .copyright {
            font-size: 12px;
            color: #00AFEF;
        }
        /* Resolução menor */
        @media (max-width: 768px) {
            .footer-content {
                flex-direction: column;
                align-items: center;
                
            }
            /* Espaçamento dos Ícones */
            .logo, .icons, .footer-links {
                text-align: center;
                margin: 15%;
            }
            .footer-links {
                margin-top: 10px;
            }
            @media (max-width: 200px) {
                .footer{
                    background-color: darkgrey;
                }
                .footer-content,.icons,.logo,.copyright,.footer-links{
                    display: none;
                }
            }
        }
    </style>
</head>
<body>
    <footer class="bg-dark">
        <div class="footer-content container d-flex">
            <!-- Lado Esquerdo: Logo e Copyright -->
            <div class="logo"><!-- O logo é o nome da classe -->
                <img src="../imagens-hf/logo_azul_final.svg" alt="Logo">
                <p class="copyright">&copy; Peregrinus 2024. Todos os direitos reservados.</p>
            </div>

            <!-- Meio: Título e Ícones de Cartões -->
            <div class="icons text-center"> <!-- O icones é o nome da classe -->
                <p>Aceitamos os cartões</p>
                <i class="fab fa-cc-visa"></i>
                <i class="fab fa-cc-mastercard"></i>
                <i class="fab fa-cc-amex"></i>
                <i class="fab fa-cc-elo"></i>
            </div>

            <!-- Lado Direito: Links -->
            <div class="footer-links text-end"><!-- O footer-links é o nome da classe -->
                <a href="#">Trabalhe conosco</a>
                <a href="#">Contato</a>
                <a href="#">FAQ</a>
            </div>
        </div>
    `;
    document.querySelector('body').insertAdjacentHTML('beforeend', footerHTML);
}

loadHeader();
loadFooter();
