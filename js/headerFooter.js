function loadHeader() {

    const headerHTML = `
    <header id="bloco1">
        <div id="logo"><img src="../imagens-hf/logo_branca.png" alt="Logo"></div>
        
        <div id="buscar">
            <form action="buscar.py" method="get">
                <div class="search-container">
                    <input id="pesquisa" type="text" placeholder="Buscar">
                    <button  class="fas fa-search" type="submit" id="botao-buscar">
                     
                    </button>
                </div>
            </form>
            <div id="menu"><a href="#bloco1">Loja</a></div>
        </div>
        <nav id="menu2">
        <i class="fas fa-shopping-cart carrinho-icon"></i>
        <div id="perfil"><img src="../imagens-hf/user2.png" alt="Perfil"></div></div></nav>
    </header>


    <style> 
    header {
        background-color: #421A1E;
        color: #fff;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }
    
    #logo img {
        width: 100px; 
        height: auto;
        margin-left: 20px;
    }
    #buscar form {
        display: flex;
        position: relative; 
    }
    #buscar input[type="text"] {
        padding: 8px 40px 8px 10px;  
        width: 380px; 
        max-width: 100; 
        border: 5px;
        border-color: black;
        background-color: rgba(255, 255, 255, 0.8);
        box-shadow: 0 2px 7px rgba(0, 0, 0, 15); /
        opacity: 0.8;
        color: #3E2723;
        border-radius:5px;
    }
    #buscar input[type="text"]::placeholder {
        color: #3E2723; 
    }
    
    
    #botao-buscar {
        position: absolute;
        right: 0; 
        top: 50%;
        transform: translateY(-50%);
        background-color: transparent;
        border: none;
        cursor: pointer;
        width: auto;
    }
    
    #botao-buscar i {
        font-size: 20px; 
        color: #000; 
        padding: 5px; 
        position: absolute; 
        right: 5px; 
        top: 50%; 
        transform: translateY(-50%); /
    }
    
    #buscar{
        display: flex;
        justify-content: space-between;
        margin-left: 50px;
    }
    #menu{
        display: flex;
        align-self: center;
        margin-left: 10%;
        align-items:center;
    }
    #menu2{
        display: flex;
        justify-content: flex-end;
        align-items:center;
    }
    #menu a {
        color: #ffffff;
        text-decoration: none;   
    }
    #perfil img {
        width: 75px; 
        height: 100%;
         
    }
    .carrinho-icon {
        max-width: 80px; 
        height: auto;
        margin-right: 10px;
        margin-left: 10px;
    }
    @media only screen and (max-width: 768px) {
        
        #buscar input[type="text"]{
         width: 70%;
         max-width: calc(100% - 30px)
        }
        #botao-buscar i {
         font-size: 20px; 
        }   
        #menu{
            display:none;
        }
        #botao-buscar {
         right: 8px;
        }
         
     }
    </style>

    `;
    document.querySelector('body').insertAdjacentHTML('afterbegin', headerHTML);
}


function loadFooter() {
    
    const footerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <footer class="agoravai">
    
        <div class="bloco-footer">
            <div class="logo">
                <img src="../imagens-hf/logo_branca.png" alt="Logo">
            </div>
            <p class="copyright">&copy; Peregrinus 2024. Todos os direitos reservados.</p>
        </div>
        <div class="bloco2">
        <section class="icons">
            <p>Aceitamos os cartões</p>
            <i class="fab fa-cc-visa"></i>
            <i class="fab fa-cc-mastercard"></i>
            <i class="fab fa-cc-amex"></i>
            <i class="fab fa-cc-elo"></i>
        </section>
        <section class="contatos"><h5>
            <a href="#">Trabalhe conosco</a>
            <a href="#">Contato</a>
            <a href="#">FAQ</a></h5>
        </section></div>
    
    </footer>
    <style>
    body{
        margin:0;
    }
    footer {
        background-color: #421A1E;
        color: #fff;
        text-align: center;
        padding: 10px;
        
        display: flex;
        justify-content: space-between; 
        align-items: center; 
    }
   
    .bloco2{
        display:flex;
        align-items: flex-end;
        justify-content: center
    }
    .bloco-footer {
        display: flex;
        align-items: flex-start; 
        flex-direction: column; 
    }
    .logo {
        margin-bottom: 10px;
        margin: 15px; 
    }
    .logo img {
        max-width: 200px;
        height: auto;
    }
    .icons i {
        margin: 0 10px;
        font-size: 50px;
    }
    p {
        font-size: 20px;
    }
    .copyright {
        font-size: 12px;
    }
    .contatos {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    h5 {
        display: flex;
        flex-direction: column;
    }
    a {
        margin: 5px 50px; 
        font-size: 12px;
        color: #fff;
        text-decoration: none;
        text-align: justify;
    }   
    @media only screen and (max-width: 768px) {
        .bloco2{
            align-items: flex-end;
        }
        footer {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    
        .bloco-footer {
            display: flex;
            flex-direction: column; 
            align-items: center; 
        }
    
        .icons, .contatos {
            max-width: 200px; 
            display: flex;
            flex-direction: column; 
            align-items: center; 
        }
    
        .contatos h5 {
            margin: 10px 0; 
        }
    
        .contatos {
            order: 2;
            width: 100%; 
        }
    
        .icons {
            order: 1; 
            width: 100%;
        }
    
        .logo {
            order: 3; 
            width: 100%; 
        }
    
        .copyright {
            order: 4; 
            width: 100%; 
        }
    }
    </style>
    `;
    document.querySelector('body').insertAdjacentHTML('beforeend', footerHTML);
}

loadHeader();
loadFooter();
