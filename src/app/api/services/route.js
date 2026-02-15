import dbConnect from "@/lib/mongoose/database/dbConnect"
import serviceModel from "@/lib/mongoose/models/ServiceSchema"

export async function GET() {
    await dbConnect()
    try {
        const result = await serviceModel.find()
        return Response.json({ result })
    } catch (error) {
        return Response.json({ message: error.message })
    }
}