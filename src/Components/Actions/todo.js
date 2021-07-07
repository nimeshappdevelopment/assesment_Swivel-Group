export const SaveTodoAction = (values) => async (dispatch) => {
  try {
   
    dispatch({ type: "SAVE_TODO", payload: values });
    
  } catch (error) {
   
  }
};

export const DeleteTodoAction = (values) => async (dispatch) => {
  try {
   
    dispatch({ type: "DELETE_TODO", payload: values });
    
  } catch (error) {
   
  }
};


export const updateTodoAction = (values) => async (dispatch) => {
 
    try {
       dispatch({type:'UPDATE',payload:values}) 
    } catch (error) {
       
    }
}


export const changeStatus = (values) => async (dispatch) => {
    try {
       dispatch({type:'CHANGE_STATUS',payload:values}) 
    } catch (error) {
       
    }
}
