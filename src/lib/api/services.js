import dbConnect from "../mongoose/database/dbConnect";
import serviceModel from "../mongoose/models/ServiceSchema";

export const getServices = async (id) => {
    try {
        const res = await fetch("http://localhost:3000/api/services");
        const data = await res.json();
        return data.result || [];
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getSingleService = async (serviceId) => {
    await dbConnect();
    const service = await serviceModel.findOne({ _id: serviceId });
    return service;
}