import {
  IconButton,
  ListItemText,
  Input,
  makeStyles,
  ListItemIcon,
  Checkbox,
  ListItem,
  ListItemSecondaryAction
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
const listStyles = makeStyles(theme => ({
  listElementSecondaryAction: {
    [theme.breakpoints.up("md")]: {
      visibility: "hidden"
    }
  },
  listElement: {
    "&:hover $listElementSecondaryAction": {
      visibility: "inherit"
    },
    "& .MuiListItem-divider": {
      borderBottom: "none"
    }
  }
}));
const checkboxUseStyle = makeStyles({
  root: {
    "&.MuiCheckbox-colorSecondary.Mui-checked": {
      color: "#EB5757"
    }
  }
});


const TodoItem = (props) => {
  const cssClasses = listStyles()
  const checkboxStyle = checkboxUseStyle();


  return (
    <ListItem
      button
      divider
      role={undefined}
      dense
      classes={{ container: cssClasses.listElement }}
    >

      <ListItemIcon>
        <Checkbox
          edge="start"
          onChange={e => props.changeStatus(e, props.task)}
          classes={checkboxStyle}
          disableRipple
          checked={props.task.completed_at ? true : false}
          tabIndex={-1}
        />
      </ListItemIcon>
      {
        props.editableRow === props.index ?
          <Input
            defaultValue={props.task.description}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                props.task.description = e.target.value;
                props.editTodo(e.target.value, props.task.id)
              }
            }} />
          : <ListItemText
            primary={props.task.description}
            id={props.index}
            style={props.task.completed_at ? { color: "#333333", textDecoration: "line-through" } : null}

            onClick={() => props.setEditableRow(props.index)} />
      }
      <ListItemSecondaryAction className={cssClasses.listElementSecondaryAction} >
        <IconButton
          aria-label="Delete"
          edge="end"
          onClick={() => props.destroyExistingTask(props.task)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
export default TodoItem;