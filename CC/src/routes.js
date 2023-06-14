const { addPost, getPostbyVote, getPostbyDate, deletePost, getPostbyId, saveVote } = require('./Post/handler')

const generalRoutes = [
    {
        method: 'POST',
        path: '/post',
        handler: addPost,
    },
    {
        method: 'POST',
        path: '/vote',
        handler: saveVote,
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
        path: '/post/{post_id}',
        handler: getPostbyId,
    },
    {
        method: 'DELETE',
        path: '/post/{post_id}',
        handler: deletePost,
    },
];
 
module.exports = generalRoutes;