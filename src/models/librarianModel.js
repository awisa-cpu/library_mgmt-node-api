import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const libSchema = new Schema({
        fullName:{
            type:String,
            required: true
        },
        email:{
            type:String,
            required: true,
            unique: true,
            // Define the regex for email validation
            match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

        },
        phone:{
            type:String,
            required:true,
            unique:true,
            // Define the regex for phone number validation
            match: [/^0[789]\d{9}$/, 'Please fill a valid  phone number']
        },
        role:{
            type: String,
            required:true,
            enum:['manager', 'assistant','IT person','security person','cleaner'],
        }
},
{
    timestamps:true
});

const LibModel = mongoose.model('Librarian', libSchema);

export default LibModel;