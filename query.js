
const mongoose = require('mongoose');
const CourseModel = require("./models/courses")


mongoose.connect("mongodb://localhost:27017/courses", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log(error))

/*
-   Find: là tìm kiếm
-   Limit: là giới hạn document lấy ra
-   Select: là lấy ra những field cần thiết, có 2 cách viết
-   Thêm điều kiện tìm kiếm trong find. Ex: CourseModel.find({author: "tommy"})
*/

CourseModel.find()
    .limit(2)
    .select({name: 1, author: 1})
    // .select ("name author")
    .then(course => console.log(course))
