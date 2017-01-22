'use strict';
const Joi = require('joi');

// This plugins has a bunch of routes related to users.. 
exports.register  = function (server, options, next) {
    	const api = server.select('portal-services');

    	api.route({
   			 method: 'GET',
    		 path: '/v1/{customer_id}/users',
    		 config: {
    		 	description: "Endpoint to get list of users",
            	tags: ['Users', 'List', 'Active'],
            	validate:{
            		params:{
            			customer_id: Joi.number().required()
            		}
            	}
    		 },
    		 handler: function (request, reply) {
        	reply([{id:1,fName:'Sriram',lName:'S'},{id:2,fName:'John Doe',lName:'Doe'}]);
    		}
		});

        next();
}


exports.register.attributes = {
    name: 'myPlugin',
    version: '1.0.0'
};