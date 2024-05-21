import ReserModel from "../models/reservationModel.js";
import MemberModel from "../models/memberModel.js";

export async function createReservation(req, res){
    try{
        const resBody = req.body;
        const newRes = await ReserModel.create(resBody);

        res.status(201).json({
            message:"reservation created",
            reservation: newRes,
        })

    }catch(e){
        res.status(500).json(
            {
                message:"could not create a reservation",
                error:e.message
            }
        );
    }
}

export async function getReservation(req, res){
    try{
        const id = req.params.id;
        const reserve = await ReserModel.findById(id);
        if(!reserve) return res.status(404).send('Reservation not available')

        res.status(200).json({
            message:"successful",
            reservation: reserve,
        })

    }catch(e){
        res.status(500).json(
            {
                message:"could not find a reservation",
                error:e.message
            }
        );
    }
}

export async function getReservations(req, res){
    try{
        const reserves = await ReserModel.find();
        const count = await ReserModel.countDocuments();

        res.status(200).json({
            message:"successful",
            count:count,
            reservations: reserves,
        })

    }catch(e){
        res.status(500).json(
            {
                message:"could not find reservations",
                error:e.message
            }
        );
    }
}

export async function deleteReservation(req, res){
    try{
        const id = req.params.id;
       await ReserModel.findByIdAndDelete(id);
       res.status(200).send('Reservation deleted')

    }catch(e){
        res.status(500).json(
            {
                message:"could not delete reservation",
                error:e.message
            }
        );
    }
}
export async function getMemberReservations(req, res){
    try{
        const id = req.params.id;
        const member = await MemberModel.findById(id)
        if(!member) return res.status(404).send('member with this id was not found');

       const foundRes = await ReserModel.find({memberId:member._id});
       if(!foundRes) return res.status(404).send('Reservation not found for this member');

       

       res.status(200).json({
        message:'Reservations found',
        count: foundRes.length,
        reservations:foundRes,
       })

    }catch(e){
        res.status(500).json(
            {
                message:"could not find reservations",
                error:e.message
            }
        );
    }
}