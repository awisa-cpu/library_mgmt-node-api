import { Timestamp } from 'mongodb';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//create the member schema
const MemberSchema = new Schema(
    {
        name:{
            type: String,
            required:true,
            minlength: [5, 'Name must be at least 5 characters long']
        },
        email:{
            type: String,
            required: true,
            unique: true,
            // Define the regex for email validation
             match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        phone:{
            type:String,
            required:true,
            // Define the regex for phone number validation
            match: [/^0[789]\d{9}$/, 'Please fill a valid  phone number']
        },
        membershipType:{
            type: String,
            enum:["regular", "premium"],
            default:"regular"
        },
        address:{
            type: String,
            required: true,

        }

},
{
    timestamps: true,
}
);

const MemberModel = mongoose.model('Member', MemberSchema);

export default MemberModel;