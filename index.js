const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

const port = 4000;
app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});
