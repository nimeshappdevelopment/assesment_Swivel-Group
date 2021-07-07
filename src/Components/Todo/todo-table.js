import React from 'react'
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { DeleteTodoAction,changeStatus } from '../Actions/todo';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button } from '@material-ui/core'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoTable = ({todo,setCurrentId}) => {
 const dispatch = useDispatch();

    
    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
                },
        body: {
            fontSize: 14,
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        },
    },
    }))(TableRow);




    const deletRecord = (id) => {
      
    dispatch(DeleteTodoAction(id))
      .then((data) => {
        toast("Todo successfully deleted");
      })
      .catch((e) => {
      console.log(e)
      });
    }

    const completed = (completedTask) => {
        
   
        dispatch(changeStatus(completedTask))
      .then((data) => {
         toast("Todo successfully completd");
      })
      .catch((e) => {
      console.log(e)
      });
}

    const todos = useSelector(state => state.todo.todo);
    const sortByKey = key => (a, b) => a[key] > b[key] ? 1 : -1
    const sorted = todos.slice().sort(sortByKey('title'))
    
    return (  
        <Grid container spacing={0}>
            <Grid item xs={12} md={12} style={{ padding: "1rem" }}>
                  <TableContainer component={Paper}>
                    <Table  aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">Discription</StyledTableCell>
                            <StyledTableCell align="right">Options</StyledTableCell>
                           
                        </TableRow>
                        </TableHead>
                         <TableBody>
                        
                            

                            {sorted.length !== 0 ?     
                                <>
                                    {sorted.map((todo, index) => (
                                     
                                        
                                    <StyledTableRow key={index}>
                                            <StyledTableCell component="th" scope="row" >
                                        { todo.title}
                                    </StyledTableCell>
                                   
                                    <StyledTableCell align="right">{ todo.discription}</StyledTableCell>
                                            <StyledTableCell align="right">
                                                {todo.status === false? <>
                                                 <Button  variant='contained' color='secondary' size='small'onClick={()=>deletRecord(todo.id)} type='button'>delete</Button> &nbsp;
                                                <Button  variant='contained' color='primary' size='small' onClick={()=>setCurrentId(todo.id)}  type='button'>Edit</Button>&nbsp;
                                                <Button  variant='contained' color='primary' size='small' onClick={()=>completed(todo)}  type='button'>Mark As Completed</Button>
                                                </> : null}
                                            </StyledTableCell>
                                    </StyledTableRow>
                                       
                                   
                                ))}
                                </> :
                                 <>
                                   <StyledTableRow key={1}>
                                    <StyledTableCell component="th" align="center" colSpan='3' scope="row">
                                        Sorry No Results Found
                                    </StyledTableCell> 
                                    </StyledTableRow>
                                </>}
                        </TableBody>
                    </Table>
                </TableContainer> 
            </Grid>
        </Grid>
    )
}

export default TodoTable;
