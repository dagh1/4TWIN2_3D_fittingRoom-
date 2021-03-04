
const events = require('../../models/event');
const schemaEvent = require('./schema').ValidatorSchemaOfBody ;
const Joi = require('../../lib/joi');

function _validateschemaEvent(body){
    return Joi.attempt(body,schemaEvent);

}



async function addEvent(req,res){
    /* const  livraison = await livraisons.insertOne(req.body);
    if(livraison){
        return res.status(200).send(livraison);
    }
    return res.status(400).end(); */
}

module.exports = {
    addEvent
}; 