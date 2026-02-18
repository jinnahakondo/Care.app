import CredentialsProvider from "next-auth/providers/credentials";


import bcrypt from "bcryptjs";
import dbConnect from "@/lib/mongoose/database/dbConnect"
import userModel from "@/lib/mongoose/models/UserSchema"

const credentialsProvider = CredentialsProvider({

    async authorize(credentials) {

        if (!credentials) return null

        await dbConnect()

        try {
            const user = await userModel.findOne({ email: credentials.email })

            if (user) {
                const isPassMatched = bcrypt.compare(credentials.password, user?.password)
                if (isPassMatched) { return user }
                else { throw new Error('password incorrect') }
            }
            else { throw new Error('user not found') }
        } catch (error) {
            console.log(error.message)
        }


    }
})




export { credentialsProvider }