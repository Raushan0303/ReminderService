const amqplib = require('amqplib/callback_api');
const {MESSAGE_BROKER_URL,EXCHANGE_NAME} = require('../config/server-config')

const createChannel = async () => {
    try {
        const connection = await amqplib.connect(MESSAGE_BROKER_URL);
        const channel = await connection.createChannel(); 
        await channel.assertExchange(EXCHANGE_NAME, 'direct', false);
        return channel;
    } catch (error) {
        throw error;
    }
}


const subscribeMessage = async(channel,service, binding_key) => {
    try {
        const applicationQueue = await channel.assrtQueue('QUEUE_NAME');
        
        channel.binding_key(applicationQueue.queue, EXCHANGE_NAME,binding_key);
        channel.consume(applicationQueue.queue,msg=>{
            console.log('recieved data');
            console.log(msg.content.toString());
            channel.ack(msg);
        })
    } catch (error) {
        
    }
}
const publishMessage = async(channel,binding_key,message)=>{
    try {
        await channel.publish(EXCHANGE_NAME,binding_key,Buffer.from(message));
    } catch (error) {
        throw error;
    }
}


module.exports = {
    subscribeMessage,
    createChannel,
    publishMessage
}

/**
 * for creating a channel first we need to setup connection with queue
 * once the connection is setup we create the channel by line no 6
 * now what is assertExchange?
 * 
 */