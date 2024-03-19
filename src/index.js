const express = require('express');
const bodyparser = require('body-parser')
const {sendBasicEmail} = require('./services/email-service')
const cron = require('node-cron')

const {PORT} = require('./config/server-config')
const setUpServer=()=>{

    const app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}))

    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`)
    })
    // sendBasicEmail(
    //     'support@admin.com',
    //     'vishwajitsingh418@gmail.com',
    //     'This is a reminder email for bringing maggi', 
    //     'jaldi lane jao nhi to aake gand far denge bsdk'
    // )
    cron.schedule('*/2 * * * *',()=>{
        console.log('running a task every two minutes')
    });
}


setUpServer();
