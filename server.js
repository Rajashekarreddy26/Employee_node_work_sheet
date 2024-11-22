const express = require('express');
const bodyPasrser = require('body-parser');
const cors = require('cors');
const sheetRoutes = require('./routes/sheetRoutes');


const app = express();
app.use(cors());
app.use(bodyPasrser.json());

app.use('/api', sheetRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`Server listening on http://localhost:${PORT}`);
});