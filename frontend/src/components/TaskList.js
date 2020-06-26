import React from 'react'
import { fetchTasks, addTask } from '../helpers/tasks'
import Task from './Task'
import List from '@material-ui/core/List'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

function TaskList() {
    const [tasks, setTasks] = React.useState([])
    const [task, setTask] = React.useState('')

    React.useEffect(() => {
        fetchTasks.then(data => setTasks(data))
    },[])

    const handleSubmit = async () => {
        if (task.trim().length !== 0) {
            const temp = await addTask(task)
            setTasks([...tasks, temp])
            setTask('')
        }
    }

    return (
        <div>
            <h1>T0-D0-L1st</h1>
            <form className="addTask">
                <TextField color="secondary" multiline rowsMax={5} variant="outlined" size="small"
                    onChange={e => setTask(e.target.value)} value={task} style={{ width: "60%" }} />
                <Button color="secondary" startIcon={<AddIcon />} onClick={e => handleSubmit()}>
                    Add
             </Button>
            </form>
            <List>
                {
                    tasks.map((task) =>
                        <Task key={task._id} {...task} />
                    )
                }
            </List>
        </div>
    )
}

export default TaskList