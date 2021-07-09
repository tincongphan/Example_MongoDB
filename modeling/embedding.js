
// technicall embedding one - many
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/referencing_embedding", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to mongoosedb")
    })
    .catch((error) => {
        console.log(error);
    })

// 1/ create schema

const CommentChema = new mongoose.Schema({

    username: { type: String, require: true },
    content: { type: String, require: true },
})

const PostSchema = new mongoose.Schema({
    title: { type: String, require: true },
    content: { type: String, require: true },
    comments: {
        type: [CommentChema]
    }
});

// 2/ create model

const Post = mongoose.model("Post", PostSchema)
const Comment = mongoose.model("Comment", CommentChema)

// 3/ create instances

const comment1 = new Comment({
    username: "nguyen van a",
    content: "VN win"
})

const comment2 = new Comment({
    username: "nguyen van b",
    content: "VN lose"
})

const comment3 = new Comment({
    username: "nguyen van c",
    content: "win to win"
})

const newPost = new Post({
    title: "VN vs Laos",
    content: "Football",
    comments: [comment1, comment2, comment3]
})
newPost.save()
        .then(console.log)
        .catch(console.log)

/* Kĩ thuật embedding
- Tên khác: denormalization
- Giả sử 1 bài post có 1000 comment
- Cấu trúc: tất cả dữ liệu được lưu 1 file trên ổ cứng

Ưu điểm:

- Chỉ cần query 1 lần (tương ứng 1 lần đọc file trên ổ cứng)
có thể lấy được 1 bài post và 1000 comment
- Khắc phục nhược điểm referencing

Nhược điểm:

- Khi số lượng comments quá lớn vượt quá maximun size mặc 
định của 1 document (16Mb) (mongodb lưu trữ dữ liệu trên 
ổ cứng dạng BSON - binary json và có kích thước tối đa mặc định là 16Mb )
- Không thể thực hiện pagination với performence tốt.
Vì mỗi lần query bằng phương thức find thông thường sẽ
lấy luôn tất cả comments trong bài post đó
 
*/        