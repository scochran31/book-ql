const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    bookCount: INT
    savedBooks: [Book]
}

type Book {
    bookId: String
    authors: [String]
    title: String
    description: String
    link: String
}

input BookInput {
    bookId: String
    authors: [String]
    title: String
    description: String
    link: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUsername(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput: String!): User
    removeBook(bookId: String!): User
}`

module.exports = typeDefs;