const { addPost, getPostbyVote } = require('./Post/handler')

const generalRoutes = [
    {
        method: 'GET',
        path: '/posts',
        handler: getPostbyVote,
    },
    {
        method: 'POST',
        path: '/post',
        handler: addPost,
    },
];
 
module.exports = generalRoutes;