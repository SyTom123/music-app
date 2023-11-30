import mongoose from "mongoose";
export const connect = async (): Promise <void> => {
    await mongoose.connect(process.env.MONGO_URL).
    then(()=> console.log("Connect database successfully"))
    .catch(error=> console.log(error))
}