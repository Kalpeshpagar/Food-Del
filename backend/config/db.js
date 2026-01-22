import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kalpeshpagar57:7666286312@cluster0.cwer1yj.mongodb.net/food-del').then(()=>console.log("DB connected"))
}
