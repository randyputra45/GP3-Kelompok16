const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

const routes = require("./routes/index");
const db = require("./helpers/db");

const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URI;
// const dbOptions = {
//     user: process.env.MONGO_USER,
//     password: process.env.MONGO_PASSWORD,
// };

async function main() {
  try {
    // memastikan database connect baru jalankan app
    // await db.openDBConnection(uri, dbOptions);
    await db.openDBConnection(uri);
    const app = express();

    app.use(express.json()); // agar kita bisa ambil reques body json
    app.use(routes);

    app.listen(port, () => {
      console.log("Server is running on port", port);
    });
  } catch (error) {
    console.log("main", error);
  }
}

main();