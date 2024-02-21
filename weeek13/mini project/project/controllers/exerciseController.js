const db = require('../models/exercise');

const getAllExercises = async (req, res, next) => {
  try {
    const exercises = await db.getAll();
    res.status(200).json(exercises);
  } catch (error) {
    next(error);
  }
};

const getExerciseById = async (req, res, next) => {
  try {
    const exercise = await db.getById(req.params.id);
    res.status(200).json(exercise);
  } catch (error) {
    next(error);
  }
};

const createExercise = async (req, res, next) => {
  try {
    const newExercise = await db.create(req.body);
    res.status(201).json(newExercise);
  } catch (error) {
    next(error);
  }
};

const updateExercise = async (req, res, next) => {
  try {
    const updatedExercise = await db.update(req.params.id, req.body);
    res.status(200).json(updatedExercise);
  } catch (error) {
    next(error);
  }
};

const deleteExercise = async (req, res, next) => {
  try {
    await db.remove(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllExercises,
  getExerciseById,
  createExercise,
  updateExercise,
  deleteExercise,
};