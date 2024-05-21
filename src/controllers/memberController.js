import MemberModel from "../models/memberModel.js"

export async function addMember(req, res){
    try{
        const body = req.body;
      const newMember =   await MemberModel.create(body);

      res.status(201).json({
        message:"member created",
        member: newMember
      })


    }catch(e){
        res.status(500).json({
            message:"Could not create member",
            error:e.message,
        })
    }
}

export async function getMember(req, res){
    try{
        const id  = req.params.id;
      const member =   await MemberModel.findById(id);
        if(!member) return res.status(404).json({message:"Member not found",member:member})
      res.status(200).json({
        message:"successful",
        member: member
      })


    }catch(e){
        res.status(500).json({
            message:"something went wrong, while fetching member",
            error:e.message,
        })
    }
}

export async function getMembers(_, res){
    try{
      const members =   await MemberModel.find({})
      const count = await MemberModel.countDocuments();
        res.status(200).json({
            message:"successful",
            memberCount:count,
            member: members
          })

    }catch(e){
        res.status(500).json({
            message:"something went wrong, while fetching members",
            error:e.message,
        })
    }
}

export async function updateMember(req, res){
    try{
        const {id}  = req.params;
        await MemberModel.findByIdAndUpdate(id, req.body)
       const member = await MemberModel.findById(id); 
      res.status(200).json({
        message:"member info updated",
        member: member
      })


    }catch(e){
        res.status(500).json({
            message:"something went wrong, while updating member",
            error:e.message,
        })
    }
}

export async function deleteMember(req, res){
    try{
        const {id}  = req.params;
        await MemberModel.findByIdAndDelete(id)
      res.status(200).send('member deleted successfully')


    }catch(e){
        res.status(500).json({
            message:"something went wrong, while deleting member",
            error:e.message,
        })
    }
}

export async function searchMembers(req, res){
    try{
        const {name, email, membershipType} = req.query;


        let query = {};

        if(name){
            query.name = {$regex:name, $options:'i'}
        }
        if(email){
            query.email = {$regex: email, $options: 'i'};
        }
        if(membershipType){
            query.membershipType = membershipType;
        }

        const member = await MemberModel.find(query);
        res.status(200).json({
            message:'successful',
            member:member
        })
        
    }catch(e){
        res.status(500).json({
            message:"something went wrong, while searching member",
            error:e.message,
        })
    }
}
