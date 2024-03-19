const { Notifiacationticket } = require('../models/index')
const { Op } = require("sequelize");

class TicketRepository{
    async getAll() {
        try {
            const tickets = await Notifiacationticket.findAll();
            return tickets;
        } catch (error) {
            throw error;
        }
    }

    async create(data) {
        try {
            const ticket = await Notifiacationticket.create(data);
            return ticket;
        } catch (error) {
            throw error;
        }
    }
    async get(filter) {
        try {
            const tickets = await Notifiacationticket.findAll({
                where: {
                    status: filter.status,
                    notificationTime: {
                        [Op.lte]: new Date()
                    }
                }
            });
            return tickets;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TicketRepository;
