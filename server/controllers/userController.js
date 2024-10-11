const userService = require("../services/userService")

exports.updateInfo = async (req, res) => {
    try {
        await userService.updateUserInfo(req.user , req.body);
        res.status(200).send("user info updated !");
    } catch (error) {
        res.status(500).json({ message: `Authentication field : ${error.message}` });
    }
}