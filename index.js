const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send({
    fullname: 'Mayank Choudhary',
    age: 25,
    address: 'Mulik Chowk, Pune, India'
  });
});