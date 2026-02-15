import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    serviceName: {
        type: String,
        required: true
    },

    category: {
        type: String,
        enum: ["baby", "elderly", "sick"],
        required: true
    },

    description: String,

    pricePerHour: {
        type: Number,
        required: true
    },

    pricePerDay: {
        type: Number,
        required: true
    },

    image: String,

    isActive: {
        type: Boolean,
        default: true
    }
});
const serviceModel = mongoose.model.services || mongoose.model("services", serviceSchema);
export default serviceModel;
