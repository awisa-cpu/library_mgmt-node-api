import express from 'express';
import mongoose from 'mongoose';
import bookRoute from './src/routes/bookRouter.js';
import memberRouter from './src/routes/memberRouter.js';
import LoanRouter from './src/routes/loanRouter.js';
import ResRouter from './src/routes/reservationRouter.js';
import fineRouter from './src/routes/fineRouter.js';
import LibRouter from './src/routes/librarianRouter.js';
const app = express();

//constants
const baseRouteUrl = "/api/v1/books";
const baseMemberUrl = "/api/v1/members";
const baseLoanUrl = "/api/v1/loans";
const baseResUrl = "/api/v1/reservations";
const baseFineUrl = "/api/v1/fines";
const baseLibUrl = "/api/v1/librarians";


const dbConnection = "mongodb+srv://destinyawisa:Anonymous080$$$@librarysystemapi.e9tpwly.mongodb.net/?retryWrites=true&w=majority&appName=LibrarySystemApi";
const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(baseRouteUrl,bookRoute);
app.use(baseMemberUrl,memberRouter);
app.use(baseLoanUrl,LoanRouter);
app.use(baseResUrl,ResRouter);
app.use(baseFineUrl,fineRouter);
app.use(baseLibUrl,LibRouter);



//start our server
mongoose.connect(dbConnection).then(()=>{
    console.log('Database connected!');
    app.listen(port,()=>console.log(`Listening at port ${port}`));
}).catch(()=>console.log('Database Not connected!'))



app.get('/',(_,res)=>res.send('Welcome to the library api hub by Awisa Destiny'));