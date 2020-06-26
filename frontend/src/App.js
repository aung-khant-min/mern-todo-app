import React from 'react';
import TaskList from './components/TaskList'
import Grid from '@material-ui/core/Grid'

function App() {

  return (
    <Grid xs={12} sm={5} style={{ margin: "auto" }}>
      <TaskList />
    </Grid>
  );
}

export default App;
