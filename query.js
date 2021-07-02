
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

// Toán tử so sánh. Tìm trong course, document nào có  10 <= price <= 30 
CourseModel.find({price : {$gte: 10, $lte: 30}})
    .select("name author price")
    .then(course => console.log(course) )

// Tìm trong course, document nào có price = 10, 20 dùng $in 

CourseModel.find({price : {$in : [10, 20]}})
    .select("name author price")
    .then(course => console.log(course))