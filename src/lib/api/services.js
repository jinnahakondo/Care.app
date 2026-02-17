import dbConnect from "../mongoose/database/dbConnect";
import serviceModel from "../mongoose/models/ServiceSchema";

export const getServices = async () => {
    try {
        const res = await fetch("https://care-zeta-ten.vercel.app/api/services");
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