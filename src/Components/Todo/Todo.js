import React,{useState} from 'react'
import Leftbar from '../LeftBar/Leftbar'
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import TodoTable from './todo-table'
import TodoForm from './todo-form';

const Todo = () => {
    const [currentId,setCurrentId]=useState(null);
    return (
       <div>
        <Leftbar />   
            <Container style={{paddingTop: "5rem" }}>
                <Grid container spacing={0}>
                    <TodoForm currentId={currentId} setCurrentId={setCurrentId} />
                    <TodoTable setCurrentId={setCurrentId} />
                </Grid>
            </Container>
       </div> 
    )
}

export default Todo;
