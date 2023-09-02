import  express  from "express";
import path from 'path'
import db from "./utils/database.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import todos from "./models/todos.models.js";
import cors from 'cors'
const PORT = 3000;
todos;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
db.authenticate()
    .then(res => console.log(res))
    .catch(err => console.log(err))
db.sync()
    .then(res => console.log('conected to database'))
    .catch(err => console.log(err))

const app = express();

app.use(express.static('../cliente'));
app.use(cors());
// Manejo de rutas para servir la aplicación React
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../cliente', 'index.html'));
});
app.use(express.json());


app.get('/todos', async (req, res) => {

    try{

        const tareas = await todos.findAll();
        
        if(!tareas){

            res.status(404).json({message: 'tarea not found'})
        }

        res.json(tareas);

    }catch (err)

    {
        res.status(201).json(err);
        console.log(err);
    }
})

app.get('/todos/:id', async (req, res) => {

    try{

        const tareaId = req.params.id;

        const tarea = await todos.findByPk(tareaId);
    
        if(!tarea){
           return res.status(404).json({message: 'not found'});
        }
        res.json(tarea);

    }catch (err)

    {
        res.status(201).json({err: 'ocurrió un error'});
        console.log(err);
    }
   
})

app.post('/todos/', async (req, res) => {

    try{
        const { title, description, completed } = req.body

        const newTarea = await todos.create({title, description, completed});

        res.json({message: 'tarea agregada'})

    }catch (err)

    {
        res.status(201).json({err: 'ocurrió un error'});
        console.log(err);
    }
})

app.put('/todos/:id', async (req, res) => {
    
    try{

        const tareaId = req.params.id

        const {title, description, completed} = req.body

        const tarea = await todos.findByPk(tareaId)

        if(!tarea){

            res.status(404).json({message: 'tarea not found'})
        }

        await todos.update({title, description, completed},{where: { id: tareaId }})
        res.json({message: 'added'});

    }catch (err)
    {
        res.status(201).json({err: 'ocurrió un error'});
        console.log(err);
    }
})

app.delete('/todos/:id', async (req, res) => {

    try{
        const tareaId = req.params.id

        const {title, description, completed} = req.body

        const tarea = await todos.findByPk(tareaId)

        if(!tarea){

            res.status(404).json({message: 'tarea not found'})
        }

        await tarea.destroy()
        res.json({message: 'destroyed'})

    }catch (err)

    {
        res.status(201).json({err: 'ocurrió un error'});
        console.log(err);
    }


})

app.listen(PORT, () => {

    console.log(`listen on port ${PORT}`)
})