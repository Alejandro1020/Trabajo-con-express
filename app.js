//const express = require('express') FORMA VIEJA DE IMPORTAR
import express from 'express'

//traigo libreria que controla variables de entorno
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
console.log(process.env.PORT)


//app es la variable que almacena todas las funcionalidades de express
const app = express()

//Atendiendo peticiones

//1 peticion  de tipo GET para buscar todas las habitaciones
app.get('/hotelesRivieraDelSol/habitaciones', function (req, res) {
  res.send('ESTOY BUSCANDO TODAS LAS HABITACIONES')
})

//2 peticion de tipo GET para buscar por ID
app.get('/hotelesRivieraDelSol/:id', function (req, res) {
    res.send('ESTOY BUSCANDO HABITACION POR ID')
  })

  //3 peticion de tipo POST para agregar habitacion en en BD

  app.post('/hotelesRivieraDelSol/habitacion', function (req, res) {
    res.send('ESTOY AGREGANDO UNA HABITACION')
  })

  //4 peticion de tipo PUT para editar una habitacion
  app.put('/hotelesRivieraDelSol/modificarhabitacion', function (req, res) {
    res.send('Estoy modificando una habitacion')
  })



//Encendiendo el servidor en el puerto 3000
app.listen(process.env.PORT, function(){
    console.log("Encendiendo el servidor")
})