<script setup lang="ts">
import TodoItem from './TodoItem.vue';
import type { Todo } from '@/types/todo';

const props = defineProps<{
  todos: Todo[];
}>();

const emit = defineEmits<{
  'toggle-todo': [id: string];
  'delete-todo': [id: string];
  'edit-todo': [id: string, value: string];
}>();
</script>

<template>
  <ul class="flex flex-1 flex-col gap-5 overflow-y-auto pb-3">
    <TodoItem
      v-for="todo in props.todos"
      :key="todo.id"
      :todo="todo"
      @toggle-todo="emit('toggle-todo', todo.id)"
      @delete-todo="emit('delete-todo', todo.id)"
      @edit-todo="(id, value) => emit('edit-todo', id, value)"
    />
  </ul>
</template>
