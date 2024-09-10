"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const courseSchema = new mongoose_1.default.Schema({
    title: String,
    description: String,
    instructor: {
        type: mongoose_1.default.Types.ObjectId
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
});
exports.Course = new mongoose_1.default.Model("Course", courseSchema);
