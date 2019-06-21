const express = require("express");
const cors = require('cors');
const routes = require("./routes");
const path = require('path');

const app = express();
const port = 3001;

app.use(express.static(__dirname + "/public"));
app.use(cors());

app.use(express.static(path.join(__dirname, "../ui", 'build')));
routes(app);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../ui", "build", "index.html"));
});

app.listen(port, function() {
  console.log(`App listening on port ${port}!`);
});
