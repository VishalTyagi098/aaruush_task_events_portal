import mongoose from 'mongoose'



const Connection=async()=>{

  const URL=`mongodb+srv://vishal:vishalvinu@cluster0.psymqmr.mongodb.net/?retryWrites=true&w=majority`;
  
  try{

    await mongoose.connect(URL,{useNewUrlParser:true});
    console.log("Database connected succesfully");

  }catch(error){
    console.log("Error while connecting to databse: ",error);
  }
}

export default Connection;