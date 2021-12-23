import {
  LoadTodosInProgress,
  LoadTodosSuccess,
  LoadTodosFailure,
} from "./actions";

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(LoadTodosInProgress());
    const response = await fetch("http://localhost:8000/todos");
    const todos = await response.json();

    dispatch(LoadTodosSuccess(todos));
  } catch (e) {
    dispatch(LoadTodosFailure());
    dispatch(displayAlert(e));
  }
};

export const displayAlert = (text) => () => {
  alert(text);
};
