const { addPost, getPostbyVote, getPostbyDate, deletePost, getPostbyId } = require('./Post/handler')

const generalRoutes = [
    {
        method: 'POST',
        path: '/post',
        handler: addPost,
    },
    {
        method: 'GET',
        path: '/byvote',
        handler: getPostbyVote,
    },
    {
        method: 'GET',
        path: '/bydate',
        handler: getPostbyDate,
    },
    {
        method: 'GET',
        path: '/post/{postId}',
        handler: getPostbyId,
    },
    {
        method: 'DELETE',
        path: '/post',
        handler: deletePost,
    },
];
 
module.exports = generalRoutes;