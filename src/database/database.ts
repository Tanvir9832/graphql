import mongoose from "mongoose"


export const connectDB = (uri :string) => {
    mongoose.connect(uri).then((connection) => {
        console.log("Database is running at " +  connection.connection.name)
    }).catch(err => {
        console.log(err);
    });
}