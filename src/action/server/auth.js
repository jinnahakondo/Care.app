'use server'
import dbConnect from "@/lib/mongoose/database/dbConnect"
import userModel from "@/lib/mongoose/models/UserSchema"
import bcrypt from "bcryptjs"

export const postUser = async (userInfo) => {
    if (!userInfo) throw new Error('empty form data')
    // database connection 
    await dbConnect()
    try {
        // check the user is already exist or not
        const isUserExist = await userModel.findOne({ email: userInfo.email })
        if (isUserExist) {
            return console.log('user exist')
        }
        // create new user 
        const newUser = {
            ...userInfo,
            password: await bcrypt.hash(userInfo.password, 10),
            role: "user",
            provider: 'credential',
        }
        //save the user to db
        const result = await userModel.create(newUser)
        const user = result?._doc
        return { ...user, _id: user?._id.toString() }
    } catch (error) {
        throw new Error(error)
    }


}