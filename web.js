const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Status: Active');
});

app.listen(3000, (err) => {
    if (err) {
        console.log('Status: Failed');
    } else {
        console.log('Status: Active');
    }
});
