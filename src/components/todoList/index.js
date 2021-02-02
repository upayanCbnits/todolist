
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  uncompleteExistingTask,
  allTasks,
  completeExistingTask,
  destroyExistingTasks,
  updateExistingTask
} from "../../redux/action/actions/actionTasks";
import {
  List
} from '@material-ui/core';
import TodoItem from "../TodoItem"

const TodoList = (props) => {
  const taskDevideIntoTwo = (todos) => {
    return todos.reduce((array, el) => {
      if (el.completed_at) {
        array[0].push(el);
      } else {
        array[1].push(el);
      }
      return array;
    }, [[], []])
  }
  const [completedTasks, uncompletedTask] = useSelector(state => {
    return state.todos ? taskDevideIntoTwo(state.todos) : [[], []];
  })
  const [editableRow, setEditableRow] = useState()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allTasks())
  }, [])

  const destroyExistingTask = (task) => {
    dispatch(destroyExistingTasks({ id: task.id }))
  }

  const editTodo = (text, id) => {
    text = text.trim()
    if (text) {
      dispatch(updateExistingTask({ data: { task: { description: text } }, id: id }));
      setEditableRow()
    }
  }

  const changeStatus = (e, task) => {
    e.stopPropagation()
    if (e.target.checked) {
      dispatch(completeExistingTask({ id: task.id }))
    } else {
      dispatch(uncompleteExistingTask({ id: task.id }))
    }
  }

  const AllTodo = uncompletedTask && uncompletedTask.concat(completedTasks);
  return (<List >
    {AllTodo.map((task, index) => (
      <TodoItem
        setEditableRow={setEditableRow}
        changeStatus={changeStatus}
        editTodo={editTodo}
        destroyExistingTask={destroyExistingTask}
        editableRow={editableRow}
        task={task}
        index={index}
      />
    )
    )}
  </List>)
}
export default TodoList;