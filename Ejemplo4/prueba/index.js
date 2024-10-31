import express from "express"
import cors from "cors"
import bodyParser from "body-parser"

const app = express();
const port = 3000;
const jsonParser = bodyParser.json();
app.use(cors());

const coches = {
  data : [
    {
      marca : 'Seat',
      matricula: '45345',
      color: 'rojo',
      averia: 'motor.'
    },
    {
      marca : 'Seat',
      matricula: '65765',
      color: 'azul',
      averia: 'gfdgdf'
    },
    {
      marca : 'Opel',
      matricula: '63345',
      color: 'verde',
      averia: 'ruedas.'
    }
    
]}

app.get('/', (req, res) => {
    
    res.send(coches)
})

app.post('/coche',jsonParser,(req,res)=>{
  const item = req.body;
  coches.data.push(item.coche);
  console.log(coches.data);
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})