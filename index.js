import express from "express"; // type module
//const express = require("express"); // type commonjs


//inicializando o express
const app = express();

app.get("/api/somar", (req, res) => {
    //const é constante exemplo = 0
    //let pode ser alterada
    //var 

    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
    res.send({message: num1 + num2})
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})


