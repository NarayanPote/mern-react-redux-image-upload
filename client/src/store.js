import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { photoReducer,  photoListReducer} from "./reducers/photoReducer";


const reducer = combineReducers({
  photoList: photoReducer,
  noteList: photoListReducer,
});


const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
