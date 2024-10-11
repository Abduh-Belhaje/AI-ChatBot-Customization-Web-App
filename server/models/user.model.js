const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {
        oauthId: { type: String, required: true },
        full_name: { type: String },
        email: { type: String, unique: true },
        auth_provider: { type: String },
        role: {
            type: String,
            required: true,
            enum: ["ADMIN", "USER"],
            default: "USER"
        },
        job_profile: { type: String },
        picture: { type: String },
        heard_about_us: { type: String },
        business_name: { type: String },
        business_type: { type: String },
        department: { type: String },
        app_utilisation: { type: String },
        location: { type: String }
        // chatbots: [{ type: ObjectId, ref: 'ChatBot' }], 
    },
    {
        timestamps: true,
    },
    {
        strict: true
    }
);

const User = mongoose.model("User", UserSchema)

module.exports = User;