const express = require('express');

const app = express();

/** const rootCall = (req, res) => res.send('Thank you very much')
app.get('/', rootCall) */

app.get('/', (req, res) => {
    // res.send("Thank you for calling me")
    res.send("I know how to open Node... YAY");
})

app.listen(4200, () => console.log('Listenting to port 4200'));