const yup = require("yup");

const schema = {
    store: {
        body: yup.object({
            name: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().min(6).required(),
        }).noUnknown()
    }
};

module.exports = schema;

