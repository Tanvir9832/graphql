"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCourseById = exports.getAllCourses = void 0;
const course_model_1 = require("../model/course.model");
const getAllCourses = () => __awaiter(void 0, void 0, void 0, function* () {
    const courses = yield course_model_1.Course.find();
    return courses;
});
exports.getAllCourses = getAllCourses;
const getCourseById = (parent, arg) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(arg.id);
    const course = yield course_model_1.Course.findById(arg.id);
    return course;
});
exports.getCourseById = getCourseById;
