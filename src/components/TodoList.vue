<script setup lang="ts">
import TodoItem from './TodoItem.vue';
import type { Todo } from '@/types/todo';

const props = defineProps<{
  todos: Todo[];
}>();

const emit = defineEmits<{
  'toggle-todo': [id: string];
  'delete-todo': [id: string];
}>();
</script>

<template>
  <ul class="grid-auto-rows-min grid grid-cols-1 gap-5 overflow-y-auto pb-3 lg:grid-cols-2">
    <TodoItem
      v-for="todo in props.todos"
      :key="todo.id"
      :todo="todo"
      @toggle-todo="emit('toggle-todo', todo.id)"
      @delete-todo="emit('delete-todo', todo.id)"
    />
  </ul>
</template>
