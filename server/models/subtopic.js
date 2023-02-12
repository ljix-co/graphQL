const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subtopicSchema = new Schema({
    name: String,
    topicId: String,
    resource: String,
    keywords: String,
    notes: String,
    furtherResearchIdeas: String,
})

module.exports = mongoose.model("Subtopic", subtopicSchema)
