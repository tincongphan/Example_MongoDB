
/* Có 2 cách tạo document trong MongoDB
    1/ Dùng save()
    2/ Dùng create()
 */

// Cách 1: 

    const newCourse = new CourseModel({
        name : "MongoDB",
        author: "congtin",
        tags: ["MongoDB, Mongoose"],
        isPublished: true, 
        price: 10
    });

    newCourse.save()
    .then( course => console.log(course) )


/* Cách 2: 

    CourseModel.create({
    name: "Angular",
    author: "tommy",
    tags: ["two way binding", "Redux"],
    isPublished: true,
    price: 30
    }).then( course => console.log(course))

*/

