
// technicall referencing one - many
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/referencing_embedding", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to mongoosedb")
    })
    .catch((error) => {
        console.log(error);
    })

// 1/ create schema
const PostSchema = new mongoose.Schema({
    title: { type: String, require: true },
    content: { type: String, require: true },
});

const CommentChema = new mongoose.Schema({
    postId: {                           // foreign key. One post has many comments
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }, 
    username: { type: String, require: true },
    content: { type: String, require: true },
})

// 2/ create model

const Post = mongoose.model("Post", PostSchema)
const Comment = mongoose.model("Comment", CommentChema)

// 3/ create instances

// post
// const newPost = new Post({
//     title: "Introduction MongoDB",
//     content: "Learning MongoDB, Install Mongoose"
// })
// newPost.save()
//     .then(console.log)
//     .catch(console.log)

// comment
// const newComment1 = new Comment({
//     postId: newPost._id,
//     username: "john",
//     content: "good to learn"
// })
// newComment1.save()
//     .then(console.log)
//     .catch(console.log)

// const newComment2 = new Comment({
//     postId: newPost._id,
//     username: "henry",
//     content: "so cool"
// })

// newComment2.save()
//     .then(console.log)
//     .catch(console.log)

// const newComment3 = new Comment({
//     postId: newPost._id,
//     username: "maria",
//     content: "very hard"
// })

// newComment3.save()
//     .then(console.log)
//     .catch(console.log)

// const newComment4 = new Comment({
//     postId: newPost._id,
//     username: "adward",
//     content: "easy to learn"
// })

// newComment4.save()
//     .then(console.log)
//     .catch(console.log)

// 4/query Comment

Comment.find()
    .populate("postId", "title -_id")
    .then(console.log)
    .catch(console.log)