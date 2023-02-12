const graphql = require('graphql');
const Answer = require('../models/answer');
const AnswerType = require('./AnswerType');

const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList} = graphql;

const QuestionType = new GraphQLObjectType({
    name: "Question",
    fields: () => ({
        id: {type: GraphQLID},
        text: {type: GraphQLString},
        answers: {
            type: new GraphQLList(AnswerType),
            resolve(parent) {
                return Answer.find({questionId: parent.id})
            }
        }
    })
})

module.exports = QuestionType;
