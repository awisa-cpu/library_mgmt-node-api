import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BookSchema = new Schema(
    {
        title:{
            type:String,
            required: true,
        },
        author:{
            type:String,
            required: true,
            min:[5, 'author name must be greater than 5 characters']
        },
        isbn:{
            type:String,
            required: true,
        },
        publisher:{
            type:String,
            required: true,
            min:[5, 'publisher name must be greater than 5 characters']
        },
        publishedDate:{
            type:Date,
            required:true,
        },
        genre:{
            type:String,
            enum:["comic", "geographical", "history", "sciences","humanities","religious"],
            default:"comic"
        },
        availabiltyStatus:{
            type:String,
            enum:["available", "on loan", "reserved"],
            default:"available",
        },
        location:{
            type:String,
            enum:["on shelf","in store"],
            default:"on shelf"
        },
        count:{
            type:Number,
            required: true,
        }
    },
    {
        timestamps:true
    }
);

const BookModel = mongoose.model('Book',BookSchema);
export default BookModel;