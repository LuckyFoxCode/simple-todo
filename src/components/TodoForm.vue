<script setup lang="ts">
import { ref } from 'vue';
import CustomButton from './common/CustomButton.vue';
import type { Todo } from '@/types/todo';

const emit = defineEmits<{
  'add-todo': [todo: Todo];
}>();

const todoValue = ref<string>('');

const handleSubmit = (event: Event) => {
  event.preventDefault();

  if (todoValue.value.trim() === '') return;

  const todo = {
    id: crypto.randomUUID(),
    value: todoValue.value.trim(),
    completed: false,
  };
  emit('add-todo', todo);
  todoValue.value = '';
};
</script>

<template>
  <form
    class="flex flex-col gap-2 md:flex-row"
    @submit="handleSubmit"
  >
    <input
      v-model="todoValue"
      type="text"
      class="w-full flex-1 rounded-lg border border-slate-300 p-2 transition-colors duration-300 ease-in-out focus:border-blue-500 focus:outline-none"
      name="todo"
      placeholder="Enter your todo"
    />
    <CustomButton
      text="Add"
      type="submit"
      :disabled="todoValue.length < 1"
    />
  </form>
</template>
