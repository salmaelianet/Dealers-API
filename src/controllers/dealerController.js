const Dealer = require('../models/dealer');

module.exports = {

    index: async (req, res, next) => {
        
            const dealers = await Dealer.find ({});
            res.status(200).json(dealers);
    },

    newDealer: async (req, res, next) => {
        const newDealer = new Dealer (req.body);
        const dealer = await newDealer.save();
        res.status(200).json(dealer);
    },

    getDealer: async (req, res, next) => {
        const { dealerId } = req.params;
        const dealer = await Dealer.findById(dealerId);
        res.status(200).json(dealer);
    },

    replaceDealer: async (req, res, next) => {
        const { dealerId }= req.params;
        const newDealer = req.body;
        const oldDealer = await Dealer.findByIdAndUpdate(dealerId, newDealer);
        res.status(200).json({success: true});
    },

    updateDealer: async (req, res, next) => {
        const { dealerId }= req.params;
        const newDealer = req.body;
        const oldDealer = await Dealer.findByIdAndUpdate(dealerId, newDealer);
        res.status(200).json({success: true});
    },

    deleteDealer: async (req, res, next) => {
        const {dealerId}= req.params;
        const dealer = await Dealer.findByIdAndDelete(dealerId);
        res.status(200).json({success: true});
    }


};