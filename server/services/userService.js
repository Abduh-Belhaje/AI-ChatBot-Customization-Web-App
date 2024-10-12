const User = require("../models/user.model")

const updateUserInfo = async (user , userInfo)=>{
    console.log(user)
    await User.updateOne({ oauthId: user.id }, userInfo);
}


module.exports = { updateUserInfo };