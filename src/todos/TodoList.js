import React,{useEffect} from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";
import { connect } from "react-redux";
import { removeTodo, completeTodo } from "./actions";
import { isLoading } from "./reducers";
import { loadTodos } from "./thunks";

const TodoList = ({ todos = [], onRemovePressed, onCompletePressed,isLoading,startLoadingTodos }) => {
  useEffect(()=>{
    startLoadingTodos()
  },[])
  const loadingMessage= <div>Loading Todos...</div>
  const content= (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletePressed={onCompletePressed}
        />
      ))}
    </div>
);
return isLoading? loadingMessage : content
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos:()=> dispatch(loadTodos()),
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletePressed: (text) => dispatch(completeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
