const yup = require("yup");

const schema = {
    store: {
    body: yup
        .object({
        name: yup.string().required(),
        price: yup.number().required()
        }).noUnknown()
    },
      show: {
		params: yup.object({
				id: yup.number().required().min(1),
		  	}).noUnknown()
	  },
      update: {
		body: yup.object({
			name: yup.string().required(),
			price: yup.string().required(),
		  }).noUnknown(),
		  params: yup.object({
				id:yup.number().required().min(1),
			})
	  },
      delete: {
		params: yup
			.object({
				id: yup.number().required().min(1),
		  	}).noUnknown()
	  },
};

module.exports =  schema;

