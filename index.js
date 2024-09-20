// importando express
const express = require("express");
// criar instância
const app = express();
// definindo ejs como renderizador
app.set("view engine","ejs");
// Servindo arquivos estáticos da pasta "public"
app.use(express.static('public'));


// ROTA PRINCIPAL (index)
app.get("/",function(req,res){
    res.render("index", {title: 'Home'});
})

// ROTA CLIENTES
app.get("/clientes",(req,res) => {
    const clients = [
        {nome: "Igor Carlos", cpf: "79276596852", endereco:"Rua Santa Cecília, 233"},
        {nome: "Sandra Rebeca", cpf: "78771531122", endereco:"Rua das Mozendras, 735"},
        {nome: "Sueli Heloisa", cpf: "65312925713", endereco:"Rua Barão de Santo Ângelo, 126"},
        {nome: "Marlene Isabelle", cpf: "88966123813", endereco:"Rua Vila Gran Caprita, 098"}    
    ]
    res.render("clientes",{
        // enviando variável para página
        title: 'Clientes',
        clients:clients
    });
})  

// ROTA PRODUTOS
app.get("/produtos",(req,res) => {
    const produtos = [
        { nome: "Notebook", categoria: "Eletrônicos", preco: 3500.00 },
        { nome: "Smartphone", categoria: "Eletrônicos", preco: 2000.00 },
        { nome: "Cadeira Gamer", categoria: "Móveis", preco: 900.00 },
        { nome: "Teclado Mecânico", categoria: "Periféricos", preco: 450.00 },
        { nome: "Fone de Ouvido", categoria: "Acessórios", preco: 250.00 }
    ];
    
    res.render("produtos", { 
        title: 'Produtos', 
        produtos:produtos});
});

// ROTA PEDIDOS
app.get("/pedidos", (req,res) =>{
    const pedidos = [
        { numeroPedido: 409, valor: 3500.00 },
        { numeroPedido: 213, valor: 2900.00 },
        { numeroPedido: 423, valor: 3500.00 },
        { numeroPedido: 12, valor: 3500.00 },
        { numeroPedido: 35, valor: 3500.00 }
    ]
    res.render("pedidos", {
        title: 'Pedidos',
    pedidos:pedidos});
});

// inicialização servidor
const port = 8080;
app.listen(port, (error) => {
    if(error){
        console.log(`Ocorreu um erro: ${error}`);
    }else{
        console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
    }
});