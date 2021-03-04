const Joi = require('../../lib/joi');

const ValidatorSchemaOfBody = Joi.object({
    /* quantite:Joi.number().positive().required(),
    type_produit:Joi.valid(type_produits).required(),
    commande_id:Joi.objectId().required(),
    code_livraison:Joi.objectId().required(),
    client:Joi.string().required() */
});


module.exports = {
    ValidatorSchemaOfBody,
};