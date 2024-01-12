const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('HOME-PAGE')
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`YESS!! SERVER IS RUNNING ON PORT:${PORT}`)
})