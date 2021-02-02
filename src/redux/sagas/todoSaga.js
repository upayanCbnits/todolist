import { put, call, takeLatest } from 'redux-saga/effects';
import {
    createNewTask,
    allTasks,
    taskDetails,
    destroyExistingTask,
    completeExistingTask,
    uncompleteExistingTask,
    updateExistingTask
} from '../../services/TodoServices'
import * as types from '../action/actiontypes/index';

function* createNewTaskSaga(payload) {
    try {
        const response = yield call(createNewTask, payload)
        yield put({
            type: types.CREATE_NEW_TASK_SUCCESS,
            response
        })
    } catch (error) {
        yield put({
            type: types.ERROR,
            error
        })
    }
}

function* updateExistingTaskSaga(payload) {
    try {
        const response = yield call(updateExistingTask, payload)
        yield put({
            type: types.UPDATE_EXISTING_TASK_SUCCESS,
            response, payload
        })
    } catch (error) {
        yield put({
            type: types.ERROR,
            error
        })
    }
}

function* allTaskSaga(payload) {
    try {
        const response = yield call(allTasks, payload)
        yield put({
            type: types.ALL_TASK_SUCCESS,
            response
        })
    } catch (error) {
        yield put({
            type: types.ERROR,
            error
        })
    }
}

function* taskDetailsSaga(payload) {
    try {
        const response = yield call(taskDetails, payload)
        yield put({
            type: types.TASK_DETAILS_SUCCESS,
            response
        })
    } catch (error) {
        yield put({
            type: types.ERROR,
            error
        })
    }
}

function* destroyExistingTaskSaga(payload) {
    try {
        const response = yield call(destroyExistingTask, payload)
        yield put({
            type: types.DESTROY_EXISTING_TASK_SUCCESS,
            response, payload
        })
    } catch (error) {
        yield put({
            type: types.ERROR,
            error
        })
    }
}

function* completeExistingTaskSaga(payload) {
    try {
        const response = yield call(completeExistingTask, payload)
        yield put({
            type: types.COMPLETE_EXISTING_TASK_SUCCESS,
            response, payload
        })
    } catch (error) {
        yield put({
            type: types.ERROR,
            error
        })
    }
}

function* uncompleteExistingTaskSaga(payload) {
    try {
        const response = yield call(uncompleteExistingTask, payload)
        yield put({
            type: types.UNCOMPLETE_EXISTING_TASK_SUCCESS,
            response, payload
        })
    } catch (error) {
        yield put({
            type: types.ERROR,
            error
        })
    }
}


export default function* todoWatcher() {
    yield takeLatest(types.CREATE_NEW_TASK, createNewTaskSaga)
    yield takeLatest(types.UPDATE_EXISTING_TASK, updateExistingTaskSaga)
    yield takeLatest(types.TASK_DETAILS, taskDetailsSaga)
    yield takeLatest(types.UNCOMPLETE_EXISTING_TASK, uncompleteExistingTaskSaga)
    yield takeLatest(types.DESTROY_EXISTING_TASK, destroyExistingTaskSaga)
    yield takeLatest(types.COMPLETE_EXISTING_TASK, completeExistingTaskSaga)
    yield takeLatest(types.ALL_TASK, allTaskSaga)
}