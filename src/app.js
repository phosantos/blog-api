require('dotenv').config();
const express = require('express');
const app = express();
const postRoutes = require('./routes/postRoutes');
const db = require('./services/db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/posts', postRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server iniciado na porta ${process.env.PORT}`);
});
