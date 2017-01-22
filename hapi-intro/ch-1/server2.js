//  Server with some plugins registered.. 
// Using glue.. 
const Glue = require('glue');// Typical naming convention in nodejs - name the var with capital letter.. eg: Wreck, Reques, Promise
const Inert = require('inert');
const Vision = require('vision');

const HapiSwagger = require('hapi-swagger');

const manifest = {
	connections:[{port:8000,labels:['portal-services']}],
	registrations: [{
		plugin:{
			register: 'inert'
		},
		plugin:{
			register: 'vision'
		},
		plugin: {
			register: HapiSwagger, // Plugins from NPM
			options:{
				info: {
            	'title': 'Test API Documentation',
            	 'version': 1
        		}
    		}
		},
		plugin: {
			register: './modules/users.js', // Plugins from NPM
			options:{} 
		}
	}]
}

const options = {
    relativeTo: __dirname
};

Glue.compose(manifest, options, (err, server) => {
    if (err) {
        throw err;
    }
    server.start(() => {
        console.log('hapi server@',server.info.uri);
    });
});
