import FineModel from "../models/fineModel.js";
import MemberModel from '../models/memberModel.js';

export async function createFine(req, res){
    try{
        const newFine = await FineModel.create(req.body);

        res.status(201).json({
            message:"new fine created",
            fine: newFine,
        });

    }catch(e){
        res.status(500).send(e.message);
    }
}

export async function getFine(req, res){
    try{
        const fine = await FineModel.findById(req.params.id);
        if(!fine) return res.status(404).send('Fine not found');


        res.status(200).json({
            message:"fine found",
            fine: fine,
        });

    }catch(e){
        res.status(500).send(e.message);
    }
}

//TODO:use a payment gateway api to receive fine from client
export async function payFine(req, res){
    try{
        res.send('Api implementation coming soon...')

    }catch(e){
        res.status(500).send(e.message);
    }
}

export async function getAllMemberFines(req, res){
    try{
        const {id} = req.params;
        const member =  await MemberModel.findById(id);
        if(!member) return res.status(400).json({
            message:"member with this ID was not found",
            member:member,
        }) ;

        const fines =  await FineModel.find({
           memberId:member._id,
        })

        res.status(200).json({
            message:"successful",
            fines: fines,
        })

    }catch(e){
        res.status(500).send({
            message:'something went wrong',
            error:e.message,
        })
    }
}