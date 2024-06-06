const app = require("./app");
const connectDb = require("./config/database");
const dotenv = require("dotenv");

//Handle Uncaught exceptions (ej:undefined variables)

process.on("uncaughtException", err => {
  console.log(`Error: ${err.stack}`);
  console.log('Shutting down server due a uncaught exception');

  process.exit(1);
})

dotenv.config({ path: "backend/config/config.env" });

connectDb();
const server = app.listen(process.env.PORT, () => {
  console.log(
    "Server listening on port " +
      process.env.PORT +
      " in " +
      process.env.NODE_ENV
  );
});

//Handle unhandled promise rejections (bad urls)

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  console.log('Shutting down server');

  //Close server & exit process
  server.close(() => process.exit(1));
});
