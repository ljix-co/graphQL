const graphql = require('graphql');
const Subtopic = require('../models/subtopic')
const SubtopicType = require('../types/SubtopicType')

const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList} = graphql;

const TopicType = new GraphQLObjectType({
    name: "Topic",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        subtopics: {
            type: new GraphQLList(SubtopicType),
            resolve(parent) {
               return Subtopic.find({topicId: parent.id})
            }
        } 
    })
})

module.exports = TopicType;
