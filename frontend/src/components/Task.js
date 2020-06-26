import React, { useState } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete'
import { completeTask, deleteTask } from '../helpers/tasks'

function Task(props) {
    const [isComplete, setComplete] = useState(props.completed)
    const [isDelete, setDelete] = useState(false)


    const handleComplete = async (id) => {
        try {
            await completeTask(id, !isComplete)
            setComplete(!isComplete)
        } catch (e) {
            setComplete(isComplete)
        }
    }

    const handleDelete = async (id) => {
        await deleteTask(id)
        setDelete(true)
    }

    return !isDelete && (
        <ListItem dense button onClick={e => handleComplete(props._id)} >
            <ListItemIcon>
                <Checkbox checked={isComplete} />
            </ListItemIcon>
            <ListItemText className={isComplete && "complete"}>
                {props.description}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton onClick={e => handleDelete(props._id)}>
                    <DeleteIcon color="secondary" />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Task