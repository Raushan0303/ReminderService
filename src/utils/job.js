const cron = require('node-cron');
const emailService = require('../services/email-service')
/**
 * 10:00
 * Every 5 minutes
 * we will check are their any pending emails which was expected to be sent
 * by now and is pending
 */

const setUpJobs= ()=>{
    cron.schedule('*/1 * * * *',async()=>{
        const response = await emailService.fetchPendingEmail();
        console.log(response);
        
    });
}

module.exports = setUpJobs;