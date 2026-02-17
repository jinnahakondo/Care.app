import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service",
        required: true
    },
    serviceType: {
        type: String,
        enum: ["child", "elderly", "sick"],
        default: "child"
    },
    durationType: {
        type: String,
        enum: ["hour", "day"],
        default: "hour"
    },

    durationValue: {
        type: Number,
        required: true
    },

    location: {
        division: {
            type: String,
            required: true
        },
        district: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        area: String,
        address: String
    },

    totalCost: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        enum: ["Pending", "Confirmed", "Completed", "Cancelled"],
        default: "Pending"
    },

    bookingDate: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });
const bookingModel = mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
export default bookingModel;