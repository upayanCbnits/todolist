import * as types from '../actiontypes';

export const createNewTask = (payload) => {
    return {
        type: types.CREATE_NEW_TASK,
        data: payload
    }
}
export const destroyExistingTasks = (payload) => {
    return {
        type: types.DESTROY_EXISTING_TASK,
        id: payload.id
    }
}
export const updateExistingTask = (payload) => {
    return {
        type: types.UPDATE_EXISTING_TASK,
        data: payload.data,
        id: payload.id
    }
}
export const uncompleteExistingTask = (payload) => {
    return {
        type: types.UNCOMPLETE_EXISTING_TASK,
        id: payload.id
    }
}
export const allTasks = (payload) => {
    return {
        type: types.ALL_TASK,
        data: payload
    }
}

export const completeExistingTask = (payload) => {
    return {
        type: types.COMPLETE_EXISTING_TASK,
        id: payload.id
    }
}


