<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue';
import TodoForm from './TodoForm.vue';
import TodoList from './TodoList.vue';
import TodoStatistics from './TodoStatistics.vue';
import type { Todo } from '@/types/todo';
import { useLocalStorage } from '@/composables/useLocalStorage';

const todos = ref<Todo[]>([]);
const { getValue, setValue } = useLocalStorage();

onMounted(() => {
  const storedTodos = getValue<Todo[]>('todos');
  if (storedTodos) {
    todos.value = storedTodos;
  }
});

onUpdated(() => {
  setValue('todos', todos.value);
});

const addTodo = (todo: Todo) => {
  todos.value.push(todo);
};

const toggleTodo = (id: string) => {
  const todo = todos.value.find((todo) => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
  }
};

const editTodo = (id: string, newValue: string) => {
  const index = todos.value.findIndex((todo) => todo.id === id);
  if (index !== -1 && newValue.trim() !== '') {
    todos.value[index] = { ...todos.value[index], value: newValue.trim() };
  }
};

const deleteTodo = (id: string) => {
  todos.value = todos.value.filter((todo) => todo.id !== id);
};
</script>

<template>
  <main
    class="flex flex-1 flex-col gap-4 overflow-y-auto rounded-lg bg-white px-3 py-4 shadow-lg md:gap-6"
  >
    <TodoForm @add-todo="addTodo" />
    <p
      v-if="todos.length === 0"
      class="text-center text-2xl text-slate-400 md:text-3xl"
    >
      Empty list, please add todos
    </p>
    <TodoList
      :todos="todos"
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo"
      @edit-todo="editTodo"
    />

    <TodoStatistics
      v-if="todos.length > 0"
      :todos="todos"
    />
  </main>
</template>
