const { Schema, model } = require("mongoose");

// define the schema
const movieSchema = new Schema({
  title: Schema.Types.String,
  director: Schema.Types.String,
  image: Schema.Types.String,
  description: Schema.Types.String,
  showtimes: [Schema.Types.String],
});

// declare the model
const Sock = model("Movie", movieSchema);

// export the model
module.exports = Sock;
