const { addPost, getPostbyVote, getPostbyDate, deletePost, getPostbyId, saveVote } = require('./Post/handler')

const generalRoutes = [
    {
        method: 'POST',
        path: '/post',
        options: {
            payload: {
                maxBytes: 209715200,
                output: 'stream',
                parse: true,
                multipart: true,
                allow: ['multipart/form-data']      // <-- this fixed the media type error
            },
            handler: addPost,
        }
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