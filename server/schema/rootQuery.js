const graphql = require('graphql');
const Topic = require('../models/topic')
const Subtopic = require('../models/subtopic')
const TopicType = require('../types/TopicType')
const SubtopicType = require('../types/SubtopicType')

const {GraphQLObjectType, GraphQLID, GraphQLList} = graphql;

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        topic: {
            type: TopicType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return Topic.findById(args.id)
            }
        },
        topics: {
            type: new GraphQLList(TopicType),
            resolve(){
                return Topic.find({})
            }
        },
        subtopics: {
            type: new GraphQLList(SubtopicType),
            args: {topicId: {type: GraphQLID}},
            resolve(parent, args){
                return Subtopic.find({topicId: args.topicId})
            }
        }
    }
})

module.exports = RootQuery
