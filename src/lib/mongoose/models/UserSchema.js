const mongose = require('mongoose')

const userSchema = new mongose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    nidNumber: {
        type: String,
        required: true
    },

    contactNumber: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    provider: {
        type: String,
        enum: ["credential", "google"],
        default: "credential"
    },
}, { timestamps: true })

const userModel = mongose.models.user || mongose.model('user', userSchema)
module.exports = userModel;