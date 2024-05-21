import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const reservationSchema = new Schema(
    {
        bookId:{
            type:String,
            required: true,
            ref:"Book",
            description:"this is the book that is reserved"
        },
        memberId:{
            type:String,
            required: true,
            ref:"Book",
            description:"id of the member that is placing the reservation"
        },
        status:{
            type:String,
            enum:['active','fulfilled','cancelled'],
            default:"active",
        }

    },
    {
        timestamps:true
    }
);

const ReserModel = mongoose.model('Reservation', reservationSchema);
export default ReserModel;