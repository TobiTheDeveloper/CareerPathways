const express = require('express');
const app = express();
const admin = require('firebase-admin');
const router = express.Router();








app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');





























































const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Hello, CareerPathways!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
