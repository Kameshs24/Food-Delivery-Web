import mongoose from "mongoose";

export const connectDB = async()=>{
  await mongoose.connect('mongodb+srv://kameshs662:11886490@cluster0.cchh4.mongodb.net/food-delivery-web').then(()=>console.log('DB Connected')
  );
}