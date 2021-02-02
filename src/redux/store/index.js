
import createSagaMiddleware from 'redux-saga'
import todoReducer from '../todoReducer'
import rootSaga from '../sagas/todoSaga'
import {applyMiddleware, createStore} from 'redux'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    todoReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store;