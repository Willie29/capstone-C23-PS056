const { nanoid } = require('nanoid');
const dayjs = require('dayjs');
const connection = require('../dbConnect');
const imgUpload = require('./imgUp')

// Post
const addPost = async (request, h) => {
  const { category, caption } = request.payload;

  if (!category || !caption || category.trim() === '' || caption.trim() === '') {
    const response = h.response({
      status: 'fail',
      message: 'category or caption can\'t be empty',
    });
    response.code(400);
    return response;
  }

  const post_id = "post" + nanoid(10);
  const createdAt = dayjs().format('YYYY-MM-DD HH:mm:ss');
  const vote = 0;

  let imageUrl = '';

  if (request.payload.attachment) {
    const file = request.payload.attachment;

    try {
      imageUrl = await imgUpload.uploadToGcs(file);
    } catch (error) {
      console.error('Error uploading image:', error);
      return h.response({ message: 'Error uploading image' }).code(500);
    }
  }

  const newPost = {
    post_id,
    category,
    caption,
    image_url: imageUrl,
    createdAt,
    vote, //likenya
  };

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


// const addPost = (request, h) => {
//   const { user_id, category, caption, } = request.payload;

//   if (!category || !caption || category.trim() === '' || caption.trim() === '') {
//     const response = h.response({
//       status: 'fail',
//       message: 'category or caption can\'t be empty',
//     });
//     response.code(400);
//     return response;
//   };

//   const post_id = "post" + nanoid(10);
//   const createdAt = dayjs().format('YYYY-MM-DD HH:mm:ss');
//   let image_url = category + createdAt + ".com"
//   const vote = 0;
//   const newPost = {
//       post_id,
//       user_id,
//       category,
//       caption,
//       image_url,
//       createdAt,
//       vote
//   }

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

// Vote
const saveVote = (request, h) => {
  const { user_id, post_id } = request.payload;
  const vote_id = "vote" + nanoid(10);
  const values = [vote_id, user_id, post_id];
  const insertQuery = `INSERT INTO votes (vote_id, user_id, post_id) VALUES (?, ?, ?)`;
  const countQuery = `SELECT COUNT(*) AS voteCount FROM votes WHERE post_id = ?`;
  const updateQuery = `UPDATE posts SET vote = ? WHERE post_id = ?`;

  return new Promise((resolve, reject) => {
    connection.query(insertQuery, values, (error, results) => {
      if (error) {
        console.error('Error on voting:', error);
        reject(h.response({ message: 'Error on voting' }).code(500));
      } else {
        console.log('You\'ve voted for this post');
        connection.query(countQuery, [post_id], (error, countResult) => {
          if (error) {
            console.error('Error counting votes:', error);
            reject(h.response({ message: 'Error counting votes' }).code(500));
          } else {
            const voteCount = countResult[0].voteCount;
            connection.query(updateQuery, [voteCount, post_id], (error, updateResult) => {
              if (error) {
                console.error('Error updating vote count:', error);
                reject(h.response({ message: 'Error updating vote count' }).code(500));
              } else {
                resolve(h.response({ message: 'Post has been voted by user' }).code(200));
              }
            });
          }
        });
      }
    });
  });
};


// Get post
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
        console.error('Error retrieving posts by date:', error);
        reject(h.response({ message: 'Error retrieving posts by vote' }).code(500));
      } 
       
      console.log('Posts retrieved successfully');
      resolve(h.response(results).code(200));
    });

  });
}

const getPostbyId = (request, h) => {
  const { post_id } = request.params;

  const query = 'SELECT * FROM posts WHERE post_id = ?';

  return new Promise((resolve, reject) => {
    connection.query(query, [post_id], (error, results) => {
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

// Delete
const deletePost = (request, h) => {
  // const { post_id } = request.params; // buat kalau udah bisa tes appnya
  const { post_id } = request.params;
  const query = "DELETE FROM posts WHERE `post_id` = ?"

  connection.query(query, post_id, (error, results) => {
    if (error) {
      console.error('Error adding post:', error);
      return h.response({ message: 'Error on deleting a post' }).code(500);
    }
  });
  console.log('Post added successfully');
  return h.response({ message: 'Post has been deleted' }).code(200);
}

module.exports = { addPost, getPostbyVote, getPostbyDate, deletePost, getPostbyId, saveVote }