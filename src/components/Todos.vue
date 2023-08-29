<script lang="js">
import { ref,h } from "vue";
import { mapState } from "vuex";
import store from "../vuex/store";

const newTodoText = ref("");
let input_ref = ref()
let edits = []

export default {
  setup() {
    return { newTodoText,input_ref,todos:store.state.todos,edits};
  },
  methods: {
    clear(){
      this.$store.commit("clear")
      this.todos=[]
      this.newTodoText="q"
      this.newTodoText=""
      input_ref.value.focus()
    },
    addTodo(){
      if(this.newTodoText){
      this.$store.commit("addTodo",{text:newTodoText.value,
        id:this.$store.state.todos.length?this.$store.state.todos[this.$store.state.todos.length-1].id+1||1:1
      });
      this.todos=this.$store.state.todos
      newTodoText.value=""
    }
      input_ref.value.focus()
    },
    edit(id){
      if(!this.edits.includes(id)){
        this.edits.push(id)
      }
      // console.log(this.edits);
    },
    editTodos(newTodos){
      this.$store.commit("editTodos",{newTodos})
      this.todos = this.$store.state.todos
      newTodoText.value = "a"
      newTodoText.value = ""
      console.log(this.todos);
    },
    checkEdit(){
        // edits.includes(todo.id) ?
    let input =     h("input",{type:"text"});
        // : h("div",{class:"todo-text",value:todo.text})
    },
    removeOne(id){
      let newTodos = this.todos.filter(e=>e.id!=id)
      this.editTodos(newTodos)
    }
  }
};
</script>

<template>
  <div class="todos-container">
    <div class="todo-submiting">
      <input
        placeholder="input what to do )"
        v-model="newTodoText"
        type="text"
        class="newtodo-text"
        ref="input_ref"
      />
      <button class="newtodo-submit" @click="addTodo">add</button>
      <button class="newtodo-submit clear" @click="clear">clear</button>
    </div>
    <div class="todo" v-for="todo in todos" id="{{ todo.id }}">
      {{ todo.text }}
      <div class="todo-icons">
        <img
          src="../assets/edit.png"
          alt=""
          @click="edit(todo.id)"
          class="edit"
        />
        <img
          src="../assets/remove.png"
          alt=""
          class="remove"
          @click="removeOne(todo.id)"
        />
      </div>
    </div>
  </div>
</template>

<style>
.todos-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px 0 0 0;
}
.todo-submiting {
  display: flex;
  align-items: center;
  margin-bottom: 50px;
}
.todo {
  padding: 5px 10px;
  font-size: 25px;
  border: 1px solid grey;
  width: 674px;
  margin-bottom: 3px;
  box-sizing: border-box;
  word-wrap: break-word;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
img.edit,
img.remove {
  width: 30px;
  margin-left: 10px;
}
.newtodo-text {
  border: none;
  background-color: #e6e6e6;
  padding: 5px 20px;
  border-bottom: 2px solid grey;
  outline: none;
  color: grey;
  font-size: 34px;
  font-weight: 400;
  font-family: "Montserrat";
}
.newtodo-text::placeholder {
  color: rgb(179, 179, 179);
}
.newtodo-submit {
  padding: 6px 20px;
  border: none;
  font-size: 34px;
  font-weight: 400;
  font-family: "Montserrat";
  color: grey;
}
</style>
