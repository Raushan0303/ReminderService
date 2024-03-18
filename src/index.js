const express = require('express');
const bodyparser = require('body-parser')

const app = express();
const {PORT} = require('./config/server-config')
const setUpServer=()=>{
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}))

    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`)
    })
}


setUpServer();