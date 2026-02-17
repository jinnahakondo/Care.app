"use server"
import dbConnect from "../mongoose/database/dbConnect";
import bookingModel from "../mongoose/models/bookingSchema";

export const createBooking = async (newBooking) => {
    await dbConnect();
    const booking = await bookingModel.create(newBooking);
    return booking;
}