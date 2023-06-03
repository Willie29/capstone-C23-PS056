const { nanoid } = require('nanoid');
const connection = require('../dbConnect')
// const post = require('./post');


const addPost = (request, h) => {
    const { title, caption, image_url } = request.payload;

    const postId = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;
    const vote = 35;

    const newPost = {
        postId,
        title,
        caption,
        image_url,
        createdAt,
        updatedAt,
        vote
    }

    const query = 'INSERT INTO posts SET ?';
    connection.query(query, newPost, (error, results) => {
      if (error) {
        console.error('Error adding post:', error);
        return h.response({ message: 'Error adding post' }).code(500);
      }
    });
    console.log('Post added successfully');
    return h.response({ message: 'Post added successfully' }).code(200);
};

const getPostbyVote = (request, h) => {
  const query = 'SELECT * from posts ORDER BY vote DESC';
  return new Promise((resolve, reject) => {

    connection.query(query, (error, results) => {

      if (error) {
        console.error('Error retrieving posts by vote:', error);
        reject(h.response({ message: 'Error retrieving posts by vote' }).code(500));
      } 
       
      console.log('Posts retrieved successfully');
      resolve(h.response(results).code(200));
      
    });

  });
};

// const getPostbyDate = (request, h) => {
//   const query = 'SELECT * from posts ORDER BY vote DESC';
//   connection.query(query, (error, results) => {
//     if (error) {
//       console.error('Error retrieving posts by vote:', error);
//       return h.response({ message: 'Error retrieving posts by vote' }).code(500);
//     }

//     console.log('Posts retrieved successfully');
//     return h.response(results).code(200);
//   });
// };

module.exports = { addPost, getPostbyVote }