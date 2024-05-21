import LoanModel from "../models/loanModel.js";
import MemberModel from "../models/memberModel.js";

export async function createLoan(req, res){
    try{

        const newLoan = await LoanModel.create(req.body);

        res.status(201).json({
            message:"new loan created",
            loan : newLoan,
        });


    }catch(e){
        res.status(500).json({
            message:"loan was not created",
            error: e.message,
        });
    }
}

export async function getLoans(req, res){
    try{

        const loans = await LoanModel.find({});
        const count = await LoanModel.countDocuments();

        res.status(200).json({
            message:"successful",
            count:count,
            loans : loans,
        });


    }catch(e){
        res.status(500).json({
            message:"loans were not found",
            error: e.message,
        });
    }
}

export async function getLoan(req, res){
    try{

        const loan = await LoanModel.findById(req.params.id);
        if(!loan) return res.status(404).send("Loan was not found")
        res.status(200).json({
            message:"successful",
            loan : loan,
        });


    }catch(e){
        res.status(500).json({
            message:"loan was not found",
            error: e.message,
        });
    }
}

export async function updateLoan(req, res){
    try{
        const {id} = req.params;
        await LoanModel.findByIdAndUpdate(id, req.body);
        const loan = await LoanModel.findById(id);
        if(!loan) return res.status(404).json({
            message:"loan could not be updated/found",
            loan:loan
        })
        res.status(200).json({
            message:"successfully updated",
            loan : loan,
        });


    }catch(e){
        res.status(500).json({
            message:"loan was not updated",
            error: e.message,
        });
    }
}

TODO: 'improve on this endpoint by using references more'
export async function getMemberLoans(req, res){
    try{

        const member = await MemberModel.findById(req.params.id);
        if(!member) return res.status(404).send("Member not found")
        const loans = await LoanModel.find({
            memberId:member._id
        })
        res.status(200).json({
            message:"successful",
            loans : loans,
        });


    }catch(e){
        res.status(500).json({
            message:"loan was not found for this member",
            error: e.message,
        });
    }
}

//FIXME:
export async function searchLoans(req, res){
    try{

        const {dueDate, status} = req.query;

        let query = {};
     
         // Convert the date string to a Date object
        const queryDueDate = new Date(dueDate)

        if(dueDate){
            query.dueDate = queryDueDate;
        }
        if(status){
            query.status = status;
        }

        const loans = await LoanModel.find(query);

        res.status(200).json({
            message:"successful",
            loans : loans,
        });


    }catch(e){
        res.status(500).json({
            message:"loans were not found",
            error: e.message,
        });
    }
}


export async function deleteLoan(req, res){
    try{
        const {id} = req.params;
        await LoanModel.findByIdAndDelete(id);

        res.status(200).send('loan deleted successfully');

    }catch(e){
        res.status(500).send(e.message)
    }
}