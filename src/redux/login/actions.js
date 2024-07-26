import {
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  TODO,
  TODO_FAILURE,
  TODO_SELECTED,
  TODO_SUCCESS,
} from "./constants";
export const login = () => {
  return {
    type: LOGIN,
  };
};
export const loginSuccess = (user) => {
  console.log(user, "user.....");
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};
export const loginFailure = (err) => {
  return {
    type: LOGIN_FAILURE,
    payload: err,
  };
};

export const toDo = () => {
  return {
    type: TODO,
  };
};
export const toDoSuccess = (user) => {
  console.log(user, "user.....");
  return {
    type: TODO_SUCCESS,
    payload: user,
  };
};
export const toDOFailure = (err) => {
  return {
    type: TODO_FAILURE,
    payload: err,
  };
};

export const todoSelected = (todo) => {
  return {
    type: TODO_SELECTED,
    payload: todo,
  };
};

export const deleteTodo = () => {
  return {
    type: DELETE_TODO,
  };
};

export const deleteTodoSuccess = () => {
  return {
    type: DELETE_TODO_SUCCESS,
  };
};
