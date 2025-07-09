import Books from "../models/book.model.js";

    // Método GET (Traer)
export const getAllBooks = async (req, res) => {
    try{
        const books = await Books.findAll();
        if(books){
            return res.status(200).json(books);
        } else {
            return res.status(404).json({message:"No se encontraron libros."})     
        }
    } catch(error){ res.status(500).json({error: error.message});
        }
    };
    // Método GET (Traer por id)
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

    // Método POST (Crear)
export const createBook = async (req, res) => {
    try {
       const {title, author, pages, genre} = req.body //
       let {description} = req.body
      

       if(title === null || title === undefined || title === "")
            return res.status(400).json
            ({message: "Title no puede estar vacio"});

        const uniqueTitle = await Books.findOne({where: {title}}) 
        if(uniqueTitle) res.status(400).json({message:"El titulo ya existe"})
            
            
        if(author === undefined||author === null||author ==="")
            return res.status(400).json
            ({Message:"Author no puede estar vacio"});


        if(genre === undefined||genre === null||genre ==="")
            return res.status(400).json
            ({Message:"Genre no puede estar vacio"});

        if(pages === undefined||pages ===null||pages ==="")
            
            return res.status(400).json
            ({message:"Pages no puede estar vacio"});
        
        if(description === undefined||description === null||description === "")
            description = "No hay descripción proporcionada";

        const paginasenteras = parseInt(pages)
        if(pages!== paginasenteras){
        return res.status(400).json
        ({message:"Pages no puede tener numeros con coma o palabras"})
        
    }
        const createdBook = await Books.create({
            title, author, pages, genre, description
        })
        res.status(201).json({message: "Libro creado exitosamente", createdBook})

        
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.Message}) 
        
    }
}
// Método PUT (Actualizar)
export const updBook = async(req, res) => {
    try {
        const {id} = req.params
        let {title, author, pages, genre} = req.body
        let {description} = req.body
        
        const book = await Books.findByPk(id)
        if(!book)
            res.status(404).json
        ({message: "Libro no encontrado"});
        
        if(title){
            const uniqueTitle = await Books.findOne({where: {title}}) 
            if(uniqueTitle) res.status(400).json({message:"El titulo ya existe"})
        }
    
    if(title === undefined)
        title = book.title 

    if(title === ""){
            return res.status(400).json
        ({message: "Title no puede estar vacio"});
        } 
        

    if(author === undefined) 
        author = book.author

    if(author === "")
            return res.status(400).json
        ({message:"Author no puede estar vacio"});

    if(genre === undefined)
        genre = book.genre
    if(genre === "")
        return res.status(400).json
    ({message: "Genre no puede estar vacío"})
    
    if(pages){
        const paginasenteras = parseInt(pages)
        if(pages !== paginasenteras)
            res.status(400).json({message:"Pages no puede tener numeros con coma o palabras"})
    }

    if(pages === undefined)
    pages = book.pages
    if(pages === "")
        res.status(400).json
        ({message:"Pages no puede estar vacío"})

    if(typeof description !== "string"){
        res.status(400).json({message:"Description no puede contener números"})
    }
    if(description === undefined)
        description = book.description

    await Books.update({
        title,
        author,
        genre,
        pages,
        description,
    },

    {
        where: {id: req.params.id}
    })
    res.status(201).json({message:"Libro actualizado"})

        } catch (error) { 
            console.log("me rompi", error)
            res.status(500).json({error: error.Message}) 
              
        }
    }
    // Método DELETE (Eliminación) 
    export const delBook = async (req, res) => {

        try {
            const book = await Books.findByPk(id)
            if(!book)
                res.status(404).json({message: "Libro no encontrado"})
                const deletedbook = await Books.destroy();
                if (deletedbook > 0)
                res.status(200).json
                ({message: "Libro eliminado exitosamente"})
        } catch (error) { 
            res.status(500).json({error: error.message})
        }
    }
