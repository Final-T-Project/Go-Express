const app = require("./app.js");
const connection = require("./database/index.js");
const port = 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});