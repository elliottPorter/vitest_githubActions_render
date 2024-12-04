import express from 'express';
import cors from 'cors';
export const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

export const calcTotalPrice = (price, quantity) => {
  if ( price < 0 || quantity < 0 ){
    throw new Error('Negative numbers are not allowed');
  }
  return price * quantity;
}

// sample endpoint
app.get('/api/sample-endpoint', (req, res) => {
    // send the response
    res.status(200).json( { message: `Hello from the sample endpoint and the price is ${calcTotalPrice(2,3)}`});
})

app.listen(port, () =>{
  console.log(`Server is listening on port ${port}`);
})