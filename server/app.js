const express = require('express');
const {graphqlHTTP} = require('express-graphql');//middleware
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();

app.use(cors());

mongoose.connect('mongodb+srv://lily:graphql123@graphql.48owgwq.mongodb.net/?retryWrites=true&w=majority')

mongoose.connection.once('open', () => {
    console.log('Connected to database')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening on port 4000');
});
