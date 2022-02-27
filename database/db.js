const mongoose = require("mongoose");

const connecToDb = () => {
  mongoose.connect("mongodb+srv://Jack:951124@todolist.nfw8d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
  ).then(()=> console.log("MongoDB Atlas CONECTADO!"))
  .catch((err) => console.log(err))
};

module.exports = connecToDb;