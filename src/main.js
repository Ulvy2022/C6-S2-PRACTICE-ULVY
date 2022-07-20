import { createApp } from 'vue';
import App from './App.vue';
import TodoList from './components/TodoList.vue';
import MenuBar from './components/Menubar.vue';

var app = createApp(App);
app.component("Todo-List",TodoList);
app.component("menu-bar",MenuBar);

createApp(App).mount('#app');
