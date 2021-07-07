import React,{useState,useEffect} from 'react'
import { TextField, Button} from '@material-ui/core'
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import {SaveTodoAction,updateTodoAction} from '../Actions/todo'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useStyles from './style'



const TodoForm = ({setCurrentId,currentId}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  
     const [todoData,setTodoData]=useState({id:Math.floor(Math.random() * 10000),
        title:'',discription:'',status:false
     })
     
  const handdleSubmit = (e) => {
     e.preventDefault();

    if (currentId) {
         dispatch(updateTodoAction(todoData))
           .then((data) => {
             toast("Todo successfully updated");
             setCurrentId("");
             setTodoData({
           id:Math.floor(Math.random() * 10000), title:'',discription:'',status:false
        });
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
         dispatch(SaveTodoAction(todoData))
           .then((data) => {
              toast("Todo successfully saved");
              setTodoData({
           id:Math.floor(Math.random() * 10000), title:'',discription:'',status:false
        });
        })
        .catch((e) => {
          console.log(e);
        });
    
      
    } 
  }

    const todo = useSelector((state) => currentId ? state.todo.todo.find((todo) => todo.id === currentId) : null);
    useEffect(() => {

    if (todo) {
      setTodoData(todo)
    }
    }, [todo])
  
    return (
          <form autoComplete="off" onSubmit={handdleSubmit} className={`${classes.root} ${classes.form}`}>
    
      <Grid container spacing={3}>
        <ToastContainer />
            <Grid item xs={4} md={4} style={{ padding: "1rem" }}>
                <TextField 
                name='creator'
            variant='outlined'
              required={true}
                label='Name' fullWidth
                value={todoData.title}
                 onChange={(e)=>setTodoData({...todoData,title:e.target.value})}
                 />
            </Grid>
            <Grid item xs={4} md={4} style={{ padding: "1rem" }}>
                <TextField 
                name='creator'
              variant='outlined'
               required={true}
                 label='Discription' fullWidth 
                value={todoData.discription}
                 onChange={(e)=>setTodoData({...todoData,discription:e.target.value})}
                 />
            </Grid>
            <Grid item xs={3} md={3} style={{ padding: "1rem" }}>
                <Button  variant='contained' color='primary' size='large'  type='submit' fullWidth>{currentId ? 'Update' : 'Save'}</Button>
            </Grid> 
            </Grid>
            </form> 
    )
}

export default TodoForm
