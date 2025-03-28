<script setup lang="ts">
import { ref } from 'vue';
import TodoForm from './TodoForm.vue';
import TodoList from './TodoList.vue';
import type { Todo } from '@/types/todo';

const todos = ref<Todo[]>([]);

const addTodo = (todo: Todo) => {
  todos.value.push(todo);
};

const toggleTodo = (id: string) => {
  const todo = todos.value.find((todo) => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
  }
};

const deleteTodo = (id: string) => {
  todos.value = todos.value.filter((todo) => todo.id !== id);
};
</script>

<template>
  <main class="flex min-h-0 w-full flex-1 flex-col gap-3 rounded-lg bg-white px-3 py-4 shadow-lg">
    <TodoForm @add-todo="addTodo" />
    <TodoList
      :todos="todos"
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo"
    />
  </main>
</template>
