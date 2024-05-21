import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const fineSchema = new Schema({
    loanId:{
        type:String,
        required: true,
        ref:"Loan",
        description:"id of the associated loan"
    },
    memberId:{
        type:String,
        required: true,
        ref:"Member",
        description:"id of the associated member who is fined"
    },
    amount:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        enum:['unpaid','paid'],
        default:'unpaid'
    }
},{
    timestamps:true
});

const FineModel = mongoose.model('Fine', fineSchema);

export default FineModel;