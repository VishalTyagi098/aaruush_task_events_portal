import mongoose from 'mongoose';

// This creates the schema
const newsSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  eventName:{
    type:String,
    required:true
  },
});

// this creates the collection named 'news' by validating the 'newsSchema' 
const user=mongoose.model('user',userSchema);

export default user;