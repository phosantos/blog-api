const express = require('express');
const app = express();
const postRoutes = require('./routes/postRoutes');
const port = 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/posts', postRoutes);

app.listen(port, () => {
  console.log(`server iniciado na porta ${port}`);
});
