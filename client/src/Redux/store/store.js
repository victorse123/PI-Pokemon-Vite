// import { createStore, applyMiddleware, compose } from "redux";

// import thunkMiddleware from "redux-thunk";

// import reducer from "../reducers/Reducers";

// const composeEnHancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   reducer,
//   composeEnHancer(applyMiddleware(thunkMiddleware)) // esta línea es para poder hacer peticiones a un server
// );
// export default store;

// import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "..//reducers/Reducers";
// import thunk from "redux-thunk";

// // la extensión de Redux DevTools solo se active en el entorno de desarrollo y no en producción
// const composeEnhancers =
//   (process.env.NODE_ENV === "development" &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

// export default store;


import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/Reducers";
import * as thunk from "redux-thunk";

const composeEnhancers =
  (process.env.NODE_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk.default || thunk))
);

export default store;