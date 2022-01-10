const express = require('express');

const app = express();

app.use(() => {
    console.log('Server running')
    console.log('wedew')
})

app.listen(4000);