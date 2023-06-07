const { nanoid } = require('nanoid');
const dayjs = require('dayjs');
const connection = require('../dbConnect');
const imgUpload = require('./imgUp')


// const addPost = async (request, h) => {
//   const { category, caption } = request.payload;

//   if (!category || !caption || category.trim() === '' || caption.trim() === '') {
//     const response = h.response({
//       status: 'fail',
//       message: 'category or caption can\'t be empty',
//     });
//     response.code(400);
//     return response;
//   }

//   const postId = "post" + nanoid(10);
//   const createdAt = dayjs().format('YYYY-MM-DD HH:mm:ss');
//   const vote = 12;

//   let imageUrl = '';

//   if (request.payload.attachment) {
//     const file = request.payload.attachment;

//     try {
//       imageUrl = await imgUpload.uploadToGcs(file);
//     } catch (error) {
//       console.error('Error uploading image:', error);
//       return h.response({ message: 'Error uploading image' }).code(500);
//     }
//   }

//   const newPost = {
//     postId,
//     category,
//     caption,
//     image_url: imageUrl,
//     createdAt,
//     vote,
//   };

//   const query = 'INSERT INTO posts SET ?';
//   connection.query(query, newPost, (error, results) => {
//     if (error) {
//       console.error('Error adding post:', error);
//       return h.response({ message: 'Error adding post' }).code(500);
//     }
//   });

//   console.log('Post added successfully');
//   return h.response({ message: 'Post added successfully' }).code(200);
// };


// const getPostbyVote = (request, h) => {
//   const query = 'SELECT * from posts ORDER BY vote DESC';
//   return new Promise((resolve, reject) => {

//     connection.query(query, (error, results) => {

//       if (error) {
//         console.error('Error retrieving posts by vote:', error);
//         reject(h.response({ message: 'Error retrieving posts by vote' }).code(500));
//       } 
       
//       console.log('Posts retrieved successfully');
//       resolve(h.response(results).code(200));
      
//     });

//   });
// };

const addPost = (request, h) => {
  const { category, caption } = request.payload;

  if (!category || !caption || category.trim() === '' || caption.trim() === '') {
    const response = h.response({
      status: 'fail',
      message: 'category or caption can\'t be empty',
    });
    response.code(400);
    return response;
  };

  const postId = "post" + nanoid(16);
  const createdAt = dayjs().format('YYYY-MM-DD HH:mm:ss');
  let image_url = category + createdAt + ".com"
  image_url = image_url.trim()
  const vote = 11;
  console.log(image_url)
  const newPost = {
      postId,
      category,
      caption,
      image_url,
      createdAt,
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

const getPostbyDate = (request, h) => {
  const query = 'SELECT * from posts ORDER BY createdAt DESC';
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
}

const getPostbyId = (request, h) => {
  const { postId } = request.params;

  const query = 'SELECT * FROM posts WHERE postId = ?';
  return new Promise((resolve, reject) => {
    connection.query(query, [postId], (error, results) => {
      if (error) {
        console.error('Error fetching post:', error);
        return reject(h.response({ message: 'Error fetching post' }).code(500));
      }

      if (results.length === 0) {
        return resolve(h.response({ message: 'Post not found' }).code(404));
      }

      const post = results[0];
      console.log('Posts retrieved successfully');
      return resolve(h.response({ post }).code(200));
    });
  });
}

const deletePost = (request, h) => {
  // const { postId } = request.params; // buat kalau udah bisa tes appnya
  const { postId } = request.params;
  const query = "DELETE FROM posts WHERE `postId` = ?"

  connection.query(query, postId, (error, results) => {
    if (error) {
      console.error('Error adding post:', error);
      return h.response({ message: 'Error on deleting a post' }).code(500);
    }
  });
  console.log('Post added successfully');
  return h.response({ message: 'Post has been deleted' }).code(200);
}

module.exports = { addPost, getPostbyVote, getPostbyDate, deletePost, getPostbyId }