const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors);

// sample endpoint
app.get('api/sample-endpoint', (req, res) => {

// send the response
res.status(200).json( { message: 'Hello from the sample endpoint'});
})

app.listen(port, () =>{
  console.log(`Server is listening on port ${port}`);
})