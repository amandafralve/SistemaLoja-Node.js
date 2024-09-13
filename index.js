// importando express
const express = require("express");
// criar instância
const app = express();
// definindo ejs como renderizador
app.set("view engine","ejs");

// ROTA PRINCIPAL (index)
app.get("/",function(req,res){
    res.render("index");
})

// ROTA CLIENTES
app.get("/clientes",function(req,res){
    res.render("clientes");
})

// ROTA PRODUTOS
app.get("/produtos",function(req,res){
    res.render("produtos");
});

// ROTA PEDIDOS
app.get("/pedidos", function(req,res){
    res.render("pedidos");
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