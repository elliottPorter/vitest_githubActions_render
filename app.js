import express from 'express';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

export const calcTotalPrice = (price, quantity) => price * quantity;

// sample endpoint
app.get('/api/sample-endpoint', (req, res) => {
    // send the response
    res.status(200).json( { message: `Hello from the sample endpoint and the price is ${calcTotalPrice(2,3)}`});
})

app.listen(port, () =>{
  console.log(`Server is listening on port ${port}`);
})