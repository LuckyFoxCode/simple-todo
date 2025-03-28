<script setup lang="ts">
import CustomButton from './common/CustomButton.vue';
import type { Todo } from '@/types/todo';

const props = defineProps<{
  todo: Todo;
}>();

const emit = defineEmits<{
  'toggle-todo': [id: string];
  'delete-todo': [id: string];
}>();

const formattedTodo =
  props.todo.value.length > 40 ? `${props.todo.value.slice(0, 40)}...` : props.todo.value;
</script>

<template>
  <li
    class="shadow-inner-item flex items-center justify-between gap-1 rounded-lg border bg-slate-100 p-2 transition-colors duration-300 ease-in-out"
    :class="props.todo.completed ? 'border-green-500' : 'border-transparent'"
    @click="emit('toggle-todo', props.todo.id)"
  >
    <div
      class="size-2 rounded-full transition-colors duration-300 ease-in-out"
      :class="props.todo.completed ? 'bg-green-500' : 'bg-red-500'"
    ></div>
    <p class="flex-1 text-center">{{ formattedTodo }}</p>
    <div class="flex gap-1">
      <CustomButton
        text="✏️"
        color="edit"
      />
      <CustomButton
        text="🗑️"
        color="danger"
        @click="emit('delete-todo', props.todo.id)"
      />
    </div>
  </li>
</template>
