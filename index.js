// importando express
const express = require("express");
// criar instância
const app = express();
// definindo ejs como renderizador
app.set("view engine","ejs");

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
app.get("/produtos",function(req,res){
    const produto = "COmputador"
    res.render("produtos", { title: 'Produtos', produto: produto});
});

// ROTA PEDIDOS
app.get("/pedidos", function(req,res){
    res.render("pedidos", {title: 'Pedidos'});
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