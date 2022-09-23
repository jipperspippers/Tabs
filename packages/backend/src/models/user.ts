import { model, Schema} from 'mongoose'
import { UserDocument } from '../types'

const userSchema = new Schema(
    {
        email:{
            type: String
        },
        password: String
    }
)



const User = model<UserDocument>('User', userSchema)
export default User