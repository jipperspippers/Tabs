import { UserDocument } from '../types'
import User from '../models'

const resolvers = {
    Query: {
        me: async(
            args: {username:string},
            ): 
            Promise<UserDocument | null> =>{
                return await User.findById(args).exec()
            }
    },

    Mutation: {
        signUp: async(
            args: {email: string; password:string},
        ): Promise<UserDocument> =>{

            const user = await User.create(args)

            return user
        }
    }
}

export default resolvers