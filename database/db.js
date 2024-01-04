const mongoose = require("mongoose");

const URI =
  "mongodb+srv://ecodream:ecodream@restaurantmanagementdb.ke7wwid.mongodb.net/pesho?retryWrites=true&w=majority";

function connectToDatabase() {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  });

  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });

  mongoose.connection.on("error", (err) => {
    console.error("Error connecting to MongoDB : ", err);
  });
}

module.exports = {
  connectToDatabase,
};
