import mongoose from "mongoose";

const db_connect = async () => {
  try {
    // TODO:special character password
    await mongoose.connect(
      "mongodb+srv://arun:arun1nly1@school.b6qkdnb.mongodb.net/4pm?retryWrites=true&w=majority"
    );

    console.log("DB Connected");
  } catch (error) {
    console.log("DB connection failed");
    console.log(error.message);
  }
};

export { db_connect };
