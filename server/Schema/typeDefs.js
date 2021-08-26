const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    bookId: String
    authors: [String]
    title: String
    description: String
    link: String
    image: String
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
    me: [User]
    }

type Mutation {
    login(email: String!, password: String!):Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    removeBook(bookId: String!): User
}
`

module.exports = typeDefs;