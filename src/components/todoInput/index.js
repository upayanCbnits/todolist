import { useState } from "react";
import {
    Input,
    makeStyles,
    InputAdornment,
    IconButton
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { createNewTask } from "../../redux/action/actions/actionTasks";
import { useDispatch } from "react-redux";

const inputUseStyle = makeStyles({
    root: {
        "& .MuiInputBase-input": {
            color: "#EB5757",
            padding: "15px 0"
        },
        "&.MuiInput-underline:before": {
            borderBottom: "#333333 1px solid"
        },
        "&.MuiInput-root": {
            marginTop: "90px",
            width: "100%"
        }

    },

});

const TodoInput = () => {
    const dispatch = useDispatch();
    const [task, changeTodo] = useState('');

    const createNewTodo = (todo) => {
        todo = todo.trim()
        if (todo) {
            dispatch(createNewTask({ task: { description: todo } }));
            changeTodo('');
        }
    }

    const inputStyle = inputUseStyle();
    return (<Input
        placeholder='Add to list...'
        value={task}
        onKeyPress={(e) => {
            if (e.key === 'Enter') {
                createNewTodo(e.target.value)
            }
        }}
        onChange={(e) => changeTodo(e.target.value)}
        classes={inputStyle}
        startAdornment={
            <InputAdornment position="start">
                <IconButton onClick={() => createNewTodo(task)}>
                    <AddIcon style={{ color: "#EB5757" }} />
                </IconButton>
            </InputAdornment>
        }
    />)
}
export default TodoInput;