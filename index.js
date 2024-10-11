// importando express
import express from 'express';
const app = express();
// definindo ejs como renderizador
app.set("view engine","ejs");
// Servindo arquivos estáticos da pasta "public"
app.use(express.static('public'));

// RECEBE DADOS DE FORMULARIO
app.use(express.urlencoded({extende: false}));
app.use(express.json());

// IMPORTAÇÃO CONTROLLER
import ClientesController from "./controllers/ClientesController.js";
import PedidosController from "./controllers/PedidosController.js";
import ProdutosController from "./controllers/ProdutosController.js"
import connection from "./config/sequelize-config.js";

connection.authenticate().then(()=>{
    console.log("Conexão com o banco de dados feita com sucesso!");
}).catch((error)=>{
    console.log(error);
})

connection.query("create database if not exists lojaNode;").then(()=> {
    console.log("Banco criado");
}).catch((error)=>{
    console.log(error);
});

// ROTA PRINCIPAL (index)n
app.get("/",function(req,res){
    res.render("index", {title: 'Home'});
});

// Definindo uso de rotas
app.use("/", ClientesController);
app.use("/", PedidosController);
app.use("/", ProdutosController);






// inicialização servidor
const port = 8080;
app.listen(port, (error) => {
    if(error){
        console.log(`Ocorreu um erro: ${error}`);
    }else{
        console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
    }
});