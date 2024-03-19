const express = require('express');
const bodyparser = require('body-parser')
const {sendBasicEmail} = require('./services/email-service')
const jobs = require('./utils/job')

const TicketController = require('./controllers/ticket-controller')

const {PORT} = require('./config/server-config')
const setUpServer=()=>{

    const app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}))

    app.post('/api/v1/tickets', TicketController.create);
 

    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`)
        jobs();
    })
    
}


setUpServer();
