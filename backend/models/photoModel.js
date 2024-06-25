import mongoose from "mongoose";

const photoSchema = mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },
    
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    
  },
  {
    timestamps: true,
  }
);

const Photo = mongoose.model("Photo", photoSchema);

export default Photo;
