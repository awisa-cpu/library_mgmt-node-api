import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const LoanSchema = new Schema(
    {
        bookId:{
            type:String,
            required: true,
            ref:'Book',
            description:"id of the book being loaned out"
        },
        memberId:{
            type:String,
            required:true,
            ref:'Member',
            description:"id of the member who borrowed the book"
            
        },
        dueDate:{
            type:Date,
            required:true,
            description:"date when the book is due to be returned"
        },
        returnDate:{
            type:Date,
            description:"date when the book was returned",
            
        },
        status:{
            type:String,
            enum:["active", "returned","overdue"],
            default:"active",
            description:"status of the loan",
        }

    },
    {
        timestamps:true
    }
);

const LoanModel = mongoose.model('Loan', LoanSchema);
export default LoanModel;