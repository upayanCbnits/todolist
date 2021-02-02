import * as types from './action/actiontypes/index';

const sortTodoList = (array) => {
    return array.sort(function (a, b) {
        if (b.completed_at)
            return new Date(a.completed_at) - new Date(b.completed_at);
        else
            return new Date(b.created_at) - new Date(a.created_at);
    })
}
const todoReducer = (state = [], action) => {
    switch (action.type) {
        case types.CREATE_NEW_TASK:
            return { ...state, loading: true }
        case types.CREATE_NEW_TASK_SUCCESS:
            return {
                ...state, loading: false,
                todos: sortTodoList([action.response.data, ...state.todos])
            }
        case types.ALL_TASK:
            return { ...state, loading: true }
        case types.ALL_TASK_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: sortTodoList(action.response.data)
            }
        case types.TASK_DETAILS:
            return { ...state, loading: true }
        case types.TASK_DETAILS_SUCCESS:
            return {
                ...state, loading: false,
                fetchResponse: action.response
            }
        case types.UPDATE_EXISTING_TASK:
            return { ...state, loading: true }
        case types.UPDATE_EXISTING_TASK_SUCCESS:
            return {
                ...state, loading: false,
                todos: sortTodoList(state.todos.map(e => e.id === action.payload.id ? action.response.data : e)),
                editIndex: undefined
            }
            case types.UNCOMPLETE_EXISTING_TASK:
                return { ...state, loading: true }
            case types.UNCOMPLETE_EXISTING_TASK_SUCCESS:
                return {
                    ...state, loading: false,
                    todos: sortTodoList(state.todos.map(e => e.id === action.payload.id ? action.response.data : e)),
                    editIndex: undefined
                }
        case types.DESTROY_EXISTING_TASK:
            return { ...state, loading: true }
        case types.DESTROY_EXISTING_TASK_SUCCESS:
            return {
                ...state, loading: false,
                todos: sortTodoList(state.todos.filter(e => e.id !== action.payload.id)),
                editIndex: undefined
            }
        case types.COMPLETE_EXISTING_TASK:
            return { ...state, loading: true }
        case types.COMPLETE_EXISTING_TASK_SUCCESS:
            return {
                ...state, loading: false,
                todos: sortTodoList(state.todos.map(e => e.id === action.payload.id ? action.response.data : e)),
                editIndex: undefined
            }
        
        case types.ERROR:
            return {
                ...state,
                loading: false, error: action.error,
                editIndex: undefined
            }
        default:
            return state
    }
}

export default todoReducer;