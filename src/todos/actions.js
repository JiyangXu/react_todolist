export const CREATE_TODO = "CREATE_TODO";
export const createTodo = (text) => ({
  type: CREATE_TODO,
  payload: { text },
});

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (text) => ({
  type: REMOVE_TODO,
  payload: { text },
});

export const UPDATE_TODO = "UPDATE_TODO";
export const updateTodo = (text) => ({
  type: UPDATE_TODO,
  payload: { text },
});
