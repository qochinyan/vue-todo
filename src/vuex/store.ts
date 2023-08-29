import { createStore } from "vuex";

let todos: any[];

if (!localStorage.getItem("todos")) {
  todos = [{ text: "none" }];
  localStorage.setItem("todos", JSON.stringify({ todos }));
} else {
  todos = JSON.parse(localStorage.getItem("todos") || "{}").todos;
}
const store = createStore({
  state() {
    return {
      count: 0,
      todos: todos,
    };
  },
  mutations: {
    addTodo(state: any, payload: { text: string; id: number }) {
      const newTodos = [...state.todos, { text: payload.text, id: payload.id }];
      state.todos = newTodos;
      localStorage.setItem("todos", JSON.stringify({ todos: newTodos }));
    },
    clear(state: any) {
      const newTodos: any[] = [];
      localStorage.setItem("todos", JSON.stringify({ todos: newTodos }));
      state.todos = newTodos;
    },
    editTodos(state:any,payload:{newTodos:any[]}){
      localStorage.setItem("todos", JSON.stringify({ todos: payload.newTodos }));
      state.todos = payload.newTodos;
    }
  },
  getters: {
    todos(state: { todos: any }) {
      return state.todos;
    },
  },
});

export default store;
