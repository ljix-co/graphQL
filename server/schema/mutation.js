const graphql = require('graphql');
const Topic = require('../models/topic')
const Subtopic = require('../models/subtopic')
const Question = require('../models/question')
const Answer = require('../models/answer')
const TopicType = require('../types/TopicType')
const SubtopicType = require('../types/SubtopicType')
const QuestionType = require('../types/QuestionType')
const AnswerType = require('../types/AnswerType')

const {GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLString} = graphql;

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addTopic: {
            type: TopicType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args){
                const topic = new Topic({
                    name: args.name
                })
                return topic.save();
            }
        },
        addSubtopic: {
            type: SubtopicType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                resource: {type: new GraphQLNonNull(GraphQLString)},
                keywords: {type: GraphQLString},
                notes: {type: GraphQLString},
                furtherResearchIdeas: {type: GraphQLString},
                topicId: {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args){
                const subtopic = new Subtopic({
                    name: args.name,
                    resource: args.resource,
                    keywords: args.keywords,
                    notes: args.notes,
                    furtherResearchIdeas: args.furtherResearchIdeas,
                    topicId: args.topicId
                })
                return subtopic.save();
            }
        },
        addQuestion: {
            type: QuestionType,
            args: {
                text: {type: new GraphQLNonNull(GraphQLString)},
                subtopicId: {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args){
                const question = new Question({
                    text: args.text,
                    subtopicId: args.subtopicId
                })
                return question.save();
            }
        },
        addAnswer: {
            type: AnswerType,
            args: {
                text: {type: new GraphQLNonNull(GraphQLString)},
                questionId: {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args){
                const answer = new Answer({
                    text: args.text,
                    questionId: args.questionId
                })
                return answer.save();
            }
        },
    }
})

module.exports = Mutation;
