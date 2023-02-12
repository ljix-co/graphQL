const graphql = require('graphql');

const {GraphQLObjectType, GraphQLString, GraphQLID} = graphql;

const AnswerType = new GraphQLObjectType({
    name: "Answer",
    fields: () => ({
        id:{type: GraphQLID},
        text: {type: GraphQLString}
    })
})

module.exports = AnswerType;
