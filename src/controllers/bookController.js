import BookModel from '../models/bookModel.js';

export async function addBook(req, res){
   try{
    const body = req.body;
    const newBook = await BookModel.create(body);
    if(!newBook) return res.status(400).send("Bad request, try again")

    res.status(201).json({
        message:"Created",
        book:newBook,
    });

   }catch(e){
    res.status(500).json({
        message:"could not add book",
        error:e.message
    })
   }

}

export async function getBook(req, res){
    try{
     const {id} = req.params;
     const foundBook = await BookModel.findById(id);
     if(!foundBook) return res.status(404).send("Book not found");
 
     res.status(200).json({
         message:"Successful",
         book:foundBook,
     });
 
    }catch(e){
     res.status(500).json({
         message:"could not retrieve book",
         error:e.message
     })
    }
 
 }

 export async function getBooks(req, res){
    try{
     const {id} = req.params;
     const books = await BookModel.find({});
     const count = await BookModel.countDocuments()
 
     res.status(200).json({
         message:"Successful",
         count:count,
         books:books,
     });
 
    }catch(e){
     res.status(500).json({
         message:"could not find books",
         error:e.message
     })
    }
 
 }

 export async function updateBook(req, res){
    try{
     const {id} = req.params;
     await BookModel.findByIdAndUpdate(id, req.body);
    const book = await BookModel.findById(id);
     res.status(200).json({
         message:"updated successfully",
         book:book,
     });
 
    }catch(e){
     res.status(500).json({
         message:"could not update book",
         error:e.message
     })
    }
 
 }

 export async function deleteBook(req, res){
    try{
     const {id} = req.params;
     await BookModel.findByIdAndDelete(id);
     res.status(200).send('deleted sucessfully');
 
    }catch(e){
     res.status(500).json({
         message:"could not delete book",
         error:e.message
     })
    }
 
 }

 export async function searchBooks(req,res){
    try{
        const {title, author, genre} = req.query;

        let query = {};

        if (title) {
            query.title = { $regex: title, $options: 'i' }; // Case-insensitive search
          }
          if (author) {
            query.author = { $regex: author, $options: 'i' }; // Case-insensitive search
          }
        if(genre){
            query.genre = genre;
        }

        const books = await BookModel.find(query);
        
        res.status(200).json({message:"search successful",books:books})

    }catch(e){
        res.status(500).send(e.message)
    }
 }

