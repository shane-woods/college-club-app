const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.json({message: "Login"});
});

app.put('/account/login/:username/:password', (req, res) => {
    // Code to authenticate with the database and log user in
});

app.put('/account/register/:username/:password', (req, res) => {
    // Code to register user in the database
})

app.listen(port, () => {
  // perform a database connection when server starts
  console.log(`Server is running on port: ${port}`);
});