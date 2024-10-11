import express from "express";
const router = express.Router();
import Produto from "../models/Produtos.js";

// ROTA PRODUTOS
router.get("/produtos",(req,res) => {
    Produto.findAll().then(produtos =>{
        res.render("produtos", {
            produtos:produtos,
            title: 'Produtos'
        })
    })
});

//ROTA CADASTRO
router.post("/produtos/new", (req,res)=>{
    const nome = req.body.nome;
    const categoria = req.body.categoria;
    const preco = req.body.preco;
    Produto.create({
        nome:nome,
        categoria:categoria,
        preco:preco
    }).then(() => {
        res.redirect("/produtos");
    })
})

export default router;