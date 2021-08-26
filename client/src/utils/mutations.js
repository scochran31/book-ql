import { gql } from '@apollo/client';

const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password) {
            token
            user{
                _id
                username
            }
        }
    }
`;

const ADD_USER = gql`
    mutation addUser($email: String!, $email: String!, $password: String!){
        addUser(username: $username, email: $email, password: $password){
            token
            user{
                _id
                username
                email
            }
        }
    }
`;

const SAVE_BOOK = gql`
    mutation saveBook($bookData: BookInput!){
        saveBook(bookData: $bookData){
            _id
            username
            email
            bookCount
            savedBooks{
                bookId
                authors
                title
                description
                link
                image
            }
        }
    }
`;

const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!){
        removeBook(bookId: $bookId){
            _id
            username
            email
            bookCount
            savedBooks{
                bookId
                authors
                title
                description
                link
                image
        }
    }
`;

export default { ADD_USER, LOGIN_USER, SAVE_BOOK, REMOVE_BOOK };