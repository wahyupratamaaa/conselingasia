const app = require("./app");

const port = process.env.PORT_APP || 6000;

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});
