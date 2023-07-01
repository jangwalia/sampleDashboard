// @desc: Controller for create new teacher
// @access: Public
// route: /api/teacher

const asyncHandler = require("express-async-handler");

const Teacher = require("../models/teacherModel");

//view all teachers

const getTeachers = asyncHandler(async (req, res) => {
  const teachers = await Teacher.find({});
  res.status(200).json(teachers);
});

//create new Teacher
const createTeacher = asyncHandler(async (req, res) => {
  const { name, avatar, available } = req.body;

  if (!name) {
    res.status(400);
    throw new Error("Please enter name");
  }

  if (!avatar) {
    res.status(400);
    throw new Error("Please enter image");
  }

  if (!available) {
    res.status(400);
    throw new Error("Please tell us about the status");
  }

  //create new teacher
  const newTeacher = await Teacher.create({
    name,
    avatar,
    available,
  });

  if (newTeacher) {
    res.status(201).json({
      _id: newTeacher._id,
      name: newTeacher.name,
      avatar: newTeacher.avatar,
      available: newTeacher.available,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Teacher data");
  }
});

module.exports = {
  getTeachers,
  createTeacher,
};
