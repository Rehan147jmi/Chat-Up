import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    senderID: {
      type: String,
    },
    receiverID: {
      type: String,
    },
    conversationID: {
      type: String,
    },
    type: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Message = mongoose.model("Message", MessageSchema);
