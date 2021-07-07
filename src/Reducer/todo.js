const intialState = {
  todo: [],
};

const Todo = (state = intialState, action) => {
 
  switch (action.type) {
    case "SAVE_TODO":
      return {
        ...state
        , todo:
        [...state.todo,action.payload]  
      };
  case "DELETE_TODO":
    return {
        ...state
        , todo:
        state.todo.filter(todo=>todo.id!==action.payload)
    };
    
    case 'UPDATE':
      return {
        ...state
        , todo:
          state.todo.map((todo) => todo.id === action.payload.id ? action.payload : todo)
      }
    
    case 'CHANGE_STATUS':
      const changeStatus = state.todo.map((todo) =>
        todo.id === action.payload.id ? { ...action.payload, status: !action.payload.status }
          : todo);
    
      return {
        ...state,
         todo:changeStatus
      }
    
    default:
      return state;
  }
};

export default Todo;