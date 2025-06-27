const AuthModel = require("../models/AuthModel");


const HandleGetAllUsers = async (req, res) => {
    try {
        const users = await AuthModel.find(); // Exclude password and __v field
       
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }

        res.status(200).json({
            message: "Users finded successfully",
            totalUsers: `${users.length} users found`,
            users
        })

        
    } catch (error) {
        return res.status(500).json({ message: error.message });
        
    }
}

module.exports = {
    HandleGetAllUsers
}