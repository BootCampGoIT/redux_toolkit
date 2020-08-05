import { configureStore } from '@reduxjs/toolkit';
import postReducer from './posts/postReducer';
import usersReducer from './users/usersReducer';

const store = configureStore({ 
    reducer: {
        posts: postReducer, 
        users: usersReducer}
})

export default store;


// import { createStore, combineReducers } from 'redux';

// import {composeWithDevTools} from 'redux-devtools-extension';
// import postReducer from './posts/postReducer';
// import usersReducer from './users/usersReducer';

// const rootReducer = combineReducers({
//     posts: postReducer, 
//     users: usersReducer})

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;