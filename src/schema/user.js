const yup = require("yup");

const schema = {
    store: {
        body: yup.object({
            name: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().min(6).required(),
        }).noUnknown()
    },
    login: {
		body: yup.object({
			email: yup.string().email().required(),
			password: yup.string().min(6).required(),
		  }).noUnknown()
	},
    show: {
		params: yup.object({
				id: yup.number().required().min(1),
		  	}).noUnknown()
	},
    update: {
		body: yup.object({
			name: yup.string().nullable(),
			email: yup.string().email().nullable(),
			password: yup.string().min(6).nullable(),
		  }).noUnknown(),
		  params: yup.object({
				id:yup.number().required().min(1),
			})
	},
    delete: {
        params: yup.object({
                id: yup.number().required().min(1),
            }).noUnknown()
	}

};

module.exports = schema;

