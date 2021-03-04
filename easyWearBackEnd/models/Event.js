const mongoose = require('mongoose');
const Joi = require('../lib/joi');
const dateEvent = require('../lib/date');
// const { ObjectId } = require('mongoose').Types;

const eventSchema = mongoose.Schema({
    eventName: String,
    eventCode: Number,
    date: Date
});

const joiEventSchema = Joi.object({
    _id: Joi.ObjectId(),
    eventName: Joi.string().required(),
    eventCode: Joi.number().positive().required(),
    date: Joi.date().default( () => dateEvent.getDate(), 'date of creation'), 
});

function _validateSchema(event1){
    return Joi.attempt(event1,joiEventSchema);
}

function collection (){
    return mongoose.model('Event', eventSchema);
}

async function insertOne(event){
    const event_validate = _validateSchema(event);
    if(event_validate){
        const event_returned = await collection().insertMany(event_validate);
        return event_returned ;
    }
    return null;
}



module.exports= {
    insertOne
};