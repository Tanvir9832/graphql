import mongoose from "mongoose";

const courseSchema= new mongoose.Schema({
        title: String,
        description: String,
        instructor: {
            type: mongoose.Types.ObjectId
        },
        ratingAverage: Number,
        ratingQuantity: Number,
        price: Number,
        level: String,
        whatYouWillLearn: [
            {
                type: String
            }
        ],
        requirements: [
            {
                type: String
            }
        ],
        targetAudience: [
            {
                type: String
            }
        ],
        isPublished: [
            {
                type: Boolean
            }
        ],
        students: [
            {
                type: String
            }
        ],
})


export const Course = new mongoose.Model("Course", courseSchema);