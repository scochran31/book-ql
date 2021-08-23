const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');
const db = require('../config/connection')

const resolvers = {
    Query: {
        // me: async (parent, args, context) => {
        //     if (context.user) {
        //         const userData = await User.findOne({ _id: context.user._id })
        //             .select('-__v -password')
        //             .populate('savedBooks');

        //         return userData;
        //     }
        //     throw new AuthenticationError('Not logged in');
        // }
        me: async () => {
            const results = await db.models.User.find();
            console.log(results);

            return results;
        }
    },

    // Mutation: {
    //     addUser: async (parent, args) => {
    //         const user = await User.create(args);
    //         const token = signToken(user);

    //         return { token, user };
    //     },
    //     login: async (parent, { email, password }) => {
    //         const user = await User.findOne({ email });

    //         if (!user) {
    //             throw new AuthenticationError('Wrong email');
    //         }
    //         const correctPw = await user.isCorrectPassword(password);

    //         if (!correctPw) {
    //             throw new AuthenticationError('Wrong password!');
    //         }
    //         const token = signToken(user);
    //         return { token, user };
    //     },
    //     saveBook: async (parent, { bookData }, context) => {
    //         if (context.book) {
    //             const updatedBook = await Book.findByIdAndUpdate(
    //                 { _id: context.book._id },
    //                 { $push: { saveBook: bookData } },
    //                 { new: true }
    //             );
    //             return updatedBook;
    //         }
    //         throw new AuthenticationError('You need to be logged in!')
    //     },
    //     removeBook: async (parent, { bookId }, context) => {
    //         if (context.book) {
    //             const updatedBook = await Book.findByIdAndUpdate(
    //                 { _id: context.book._id },
    //                 { $pull: { savedBooks: bookId } },
    //                 { new: true }
    //             ).populate('savedBooks');

    //             return updatedBook;
    //         }
    //         throw new AuthenticationError('You need to be logged in!')
    //     }
    // }
};

module.exports = resolvers;