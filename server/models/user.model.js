const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {
        googleId: { type: String, required: true },
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        role: {
            type: String,
            required: true,
            enum: ['ADMIN', 'USER'], 
            default: 'USER' 
        },
        picture: { type: String },
        // chatbots: [{ type: ObjectId, ref: 'ChatBot' }], 
    },
    {
        timestamp: true,
    }
);

const User = mongoose.model("User", UserSchema)

module.exports = User;