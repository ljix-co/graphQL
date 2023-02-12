import { gql } from '@apollo/client';

const questionFields = gql`
    fragment QuestionFields on Question {
        id
        text
        answers {
            id,
            text
        }
    }
`;

const subtopicFields = gql`
    ${questionFields}
    fragment SubtopicFields on Subtopic {
        id,
        name,
        keywords,
        resource,
        notes, 
        questions {
            ...QuestionFields
        }
    }
`

const getSubtopicsQuery = gql`
    ${subtopicFields}
    query SubtopicsPerTopic($topicId: ID!) {
        subtopics(topicId: $topicId) {
               ...SubtopicFields
        }
    }
`

const getTopicsQuery = gql`
    query AllTopics {
        topics {
            id,
            name
        }
    }
`;

const getTopicQuery = gql`
    ${subtopicFields}
    query Topic($id: ID) {
        topic(id: $id) {
            name,
            subtopics {
                ...SubtopicFields
            }
        }
    }
`;

const getAuthorsQuery = gql`
{
    authors{
        name
        id
    }
}`
const getBooksQuery = gql`
{
    books{
        name
        id
    }
}`
const getBook = gql`
query($id: ID){
    book(id: $id) {
        name,
        genre,
        author{
            id
            name
            age
            books{
                name,
                id
            }
        }
    }
}`

const addBookMutation = gql`
mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId){
        name
        id
    }
}`

const addTopicMutation = gql`
mutation($name: String!) {
    addTopic(name: $name){
        name
    }
}`

export { getAuthorsQuery, getBooksQuery, addBookMutation, getBook, getTopicsQuery, getSubtopicsQuery, addTopicMutation, getTopicQuery };
