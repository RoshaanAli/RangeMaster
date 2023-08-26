import {combineReducers, compose, createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import authRed from "./reducers/authRed/authRed";

const reducers = combineReducers({authRed});

// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
//     whitelist: [
//     ],
//   };

//   const persistedReducer = persistReducer(persistConfig, reducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(persistedReducer,{},composeEnhancers(applyMiddleware(ReduxThunk)));
const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(ReduxThunk)),
);

// let persistor = persistStore(store);
// export {persistor,store}
export {store};
