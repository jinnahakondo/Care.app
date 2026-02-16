import dbConnect from "@/lib/mongoose/database/dbConnect";
import bookingModel from "@/lib/mongoose/models/bookingSchema";

export async function POST(req) {
    try {
        await dbConnect()
        const data = await req.json();
        const newBooking = await bookingModel.create(data)
        return Response.json(newBooking)
    } catch (error) {
        return Response.json({ message: error.message })
    }
}