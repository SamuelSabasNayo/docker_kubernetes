const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json([
    {
      name: 'Bobo',
      email: 'bobo@bob.com'
    },
    {
      name: 'Alice',
      email: 'alice@bob.com'
    },
    {
      name: 'Leny',
      email: 'leny@bob.com'
    },
    {
      name: 'Maria',
      email: 'maria@bob.com'
    }
  ]);
});


const port = 3000;

app.listen(port, () => console.log(`App is running on port ${port}!`));
