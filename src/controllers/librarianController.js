import LibModel from "../models/librarianModel.js";


export async function addLibrarian(req, res){
try{

    const lib = await LibModel.create(req.body);

    res.status(201).send({
        message:"Librarian created",
        librarian: lib,
    })


}catch(e){
    res.status(500).send({
        message:"Unable to add librarian",
        error:e.message
    })
}
}

export async function getLibrarian(req, res){
    try{
        const {id} = req.params;
        const lib = await LibModel.findById(id);
        if(!lib) return res.status(404).send('Librarian not found');

        res.status(200).send({
            message:"operation successful",
            librarian:lib
        })
    
    }catch(e){
        res.status(500).send({
            message:"Unable to get a librarian",
            error:e.message
        })
    }
    }
    
export async function updateLibrarian(req, res){
try{
    const id = req.params.id;
    await LibModel.findByIdAndUpdate(id, req.body);
    const updatedLib = await LibModel.findById(id)
    if(!updatedLib) return res.status(404).send('Librarian not found, hence could not be updated')
    res.status(200).send({
        message:"successful",
        librarian:updatedLib,
    })

}catch(e){
    res.status(500).send({
        message:"Unable to Update librarian",
        error:e.message
    })
}
}

export async function deleteLibrarian(req, res){
try{
    const {id} = req.params;
    await LibModel.findByIdAndDelete(id);
    res.status(200).send('Librarian deleted from the database');

}catch(e){
    res.status(500).send({
        message:"Unable to delete librarian",
        error:e.message
    })
}
}

export async function getAllLibrarians(req, res){
try{
  const libs = await  LibModel.find({})
  res.status(200).send({
    message:"successful",
    librarians:libs,
  })

}catch(e){
    res.status(500).send({
        message:"Unable to fetch librarians",
        error:e.message
    })
}
}