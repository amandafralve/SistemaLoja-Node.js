import express from "express";
const router = express.Router();
import Pedido from "../models/Pedidos.js";

// ROTA PEDIDOS
router.get("/pedidos",(req,res) => {
    Pedido.findAll().then(pedidos =>{
        res.render("pedidos", {
            pedidos:pedidos,
            title: 'Pedidos'
        })
    })
});

//ROTA CADASTRO
router.post("/pedidos/new", (req,res)=>{
    const numero = req.body.numero;
    const valor = req.body.valor;
    
    Pedido.create({
        numero:numero,
        valor:valor
    }).then(() => {
        res.redirect("/pedidos")
    }).catch((error)=>{
        console.log(error)
    })
})


export default router;