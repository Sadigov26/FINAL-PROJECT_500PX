
import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB'ye bağlanıldı");
  } catch (error) {
    console.error("MongoDB bağlantı hatası:", error.message);
  }
};

export default connectDB;
