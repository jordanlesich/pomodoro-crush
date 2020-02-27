import uuid from 'uuid/v4'

const reducer = (state, action ) => {

    switch(action.type){
        
        case 'ADD_TASK':
            return [...state, {id: uuid(), task: action.task, completed: false} ]
        case 'REMOVE_TASK':
            return state.filter(todo => todo.id !== action.id)
        // case 'TOGGLE':
        //     return state.map(todo => 
        //         (todo.id === action.id? {...todo, completed: !todo.completed} : todo))
        case 'EDIT_TASK':
            return state.map(todo =>
                (todo.id === action.id? {...todo, task: action.newTask} : todo ))
        default:
            return state;
    }

}

export default reducer; 
