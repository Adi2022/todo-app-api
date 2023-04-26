const express = require("express");

const router = express.Router();

const {
  getAllTodos,
  createTodo,
  singleTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todos.js");

router.route("/").get(getAllTodos);
router.route("/").post(createTodo);
router.route("/:id").get(singleTodo);
router.route("/:id").put(updateTodo);
router.route("/:id").delete(deleteTodo);

module.exports = router;
