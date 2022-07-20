<template>
  <menu-bar/>
  <Todo-List/>
</template>

<script>
import TodoList from './components/TodoList.vue'
import MenuBar from './components/Menubar.vue';

export default {
  name: 'App',
  components: {
    TodoList,
    MenuBar,


  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
