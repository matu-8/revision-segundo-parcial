import Books from "../models/book.model.js";

export const getAllBooks = async (req, res) => {
    try{
        const books = await Books.findAll();
        if(books){
            return res.status(200).json(books);
        } else {
            return res.status(404).json({Message:"No se encontraron libros."})     
        }
    } catch(error){ res.status(500).json({error: error.message});
        }

    };
export const getBookById = async (req, res) => {
    try {
        const book = await Books.findByPk(req.params.id);
        if(!book) {
           return res.status(400).json({message:'Libro no encontrado'});
        }
        return res.status(200).json(book);
    } catch (error) { res.status(500).json({error: error.message});  
        }    
    };
export const createBook = async (req, res) => {
    try {
       const {title, author, pages, genre} = req.body
       let {description} = req.body
      

       if(title === null || title === undefined || title === "")
            return res.status(400).json
            ({message: "Title no puede estar vacio"});
            
        if(author === undefined||author === null||author ==="")
            return res.status(400).json
            ({Message:"Author no puede estar vacio"});

        if(genre === undefined||genre === null||genre ==="")
            return res.status(400).json
            ({Message:"Genre no puede estar vacio"});

        if(pages === undefined||pages ===null||pages ==="")
            return res.status(400).json
            ({Message:"Pages no puede estar vacio"});
        
        if(description === undefined||description === null||description === "")
            description = "No hay descripción proporcionada";
                  
    } catch (error) {
        res.status(500).json({error: error.Message}) 
    }
}

export const updBook = async(req, res) => {
    const book = await Books.findByPk(req.params.id);
    
}