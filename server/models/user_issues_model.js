const mongoose=require("mongoose");
const userIssueSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
});

module.exports = mongoose.model("UserIssue", userIssueSchema);