<script setup lang="ts">
import { ref } from 'vue';
import TodoForm from './TodoForm.vue';
import type { Todo } from '@/types/todo';

const todos = ref<Todo[]>([]);

const addTodo = (todo: Todo) => {
  todos.value.push(todo);
};
</script>

<template>
  <main class="w-full flex-1 rounded-lg bg-white px-3 py-4 shadow-lg">
    <TodoForm @add-todo="addTodo" />
  </main>
</template>
