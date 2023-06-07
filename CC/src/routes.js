const { addPost, getPostbyVote, getPostbyDate, deletePost, getPostbyId } = require('./Post/handler')

const generalRoutes = [
    {
        method: 'POST',
        path: '/post',
        handler: addPost,
    },
    {
        method: 'GET',
        path: '/post/byvote',
        handler: getPostbyVote,
    },
    {
        method: 'GET',
        path: '/post/bydate',
        handler: getPostbyDate,
    },
    {
        method: 'GET',
        path: '/post/{postId}',
        handler: getPostbyId,
    },
    {
        method: 'DELETE',
        path: '/post/{postId}',
        handler: deletePost,
    },
];
 
module.exports = generalRoutes;