const graphql = require('graphql');
const Question = require('../models/question');
const QuestionType = require('./QuestionType')

const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList} = graphql;

const SubtopicType = new GraphQLObjectType({
    name: "Subtopic",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        resource: {type: GraphQLString},
        keywords: {type: GraphQLString},
        notes: {type: GraphQLString},
        furtherResearchIdeas: {type: GraphQLString},
        topicId: {type: GraphQLID},
        questions: {
            type: new GraphQLList(QuestionType),
            resolve(parent) {
                return Question.find({subtopicId: parent.id})
            }
        }
    })
})

module.exports = SubtopicType;
