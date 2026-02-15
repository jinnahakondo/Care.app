import dbConnect from "@/lib/mongoose/database/dbConnect";
import userModel from "@/lib/mongoose/models/UserSchema";
export async function GET() {
  await dbConnect()
  try {
    const result = await userModel.find()
    return Response.json({ result })
  } catch (error) {
    return Response.json({ message: error.message })
  }
}