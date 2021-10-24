const mongoose = require('mongoose')

const TaskShema = new mongoose.Schema({
  name : {
    type : String,
    required : true,
    trim : true,
  },
  completed : {
    type : Boolean,
    required : true,
    default : false
  }
})

module.exports = mongoose.model("Task" , TaskShema)
