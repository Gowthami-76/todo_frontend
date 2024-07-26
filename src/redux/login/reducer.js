import {
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  TODO_FAILURE,
  TODO_SELECTED,
  TODO_SUCCESS,
} from "./constants";

const initialState = {
  loading: false,
  user: {},
  isAuthUser: false,
  loginError: "",
  title: "",
  toDoList: "",
  toDoError: "",
  todo: {},
  selectedTodo: {},
};

const globalReducer = (state = initialState, action) => {
  console.log(action, "payloooo..");
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthUser: true,
      };
    case LOGIN_FAILURE:
      return {
        loading: false,
        user: {},
        loginError: action.payload,
        isAuthUser: false,
      };

    case TODO_SUCCESS:
      return {
        ...state,
        title: action.payload.title,
        toDoList: action.payload.toDoList,
      };
    case TODO_FAILURE:
      return {
        ...state,
        title: action.payload.title,
        toDoList: action.payload.toDoList,
        toDoError: action.payload,
      };
    case TODO_SELECTED:
      return {
        ...state,
        selectedTodo: action.payload,
      };
    case DELETE_TODO:
      return {
        ...state,
        loading: true,
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default globalReducer;
