const express = require('express');
const bodyparser = require('body-parser')
const {sendBasicEmail} = require('./services/email-service')
const {createChannel} = require('./utils/messageQueue')
const jobs = require('./utils/job')

const TicketController = require('./controllers/ticket-controller')

const {PORT} = require('./config/server-config')
const setUpServer = async()=>{

    const app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}))

    // const channel = await createChannel();

    app.post('/api/v1/tickets', TicketController.create);

 

    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`)
        jobs();
    })
    
}


setUpServer();
