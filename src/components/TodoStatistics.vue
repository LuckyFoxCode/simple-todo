<script setup lang="ts">
import type { Todo } from '@/types/todo';
import { computed } from 'vue';

const props = defineProps<{
  todos: Todo[];
}>();

const totalTodos = computed(() => props.todos.length);
const completedTodos = computed(() => props.todos.filter((todo) => todo.completed).length);
const uncompletedTodos = computed(() => props.todos.filter((todo) => !todo.completed).length);
</script>

<template>
  <section class="flex shrink-0 flex-col">
    <h2 class="text-center text-lg text-teal-500 md:text-start md:text-2xl">Statistics:</h2>
    <div class="grid grid-cols-3 md:px-20">
      <p class="text-sm text-slate-500">
        Total: <span class="font-bold text-emerald-500">{{ totalTodos }}</span>
      </p>
      <p class="text-sm text-slate-500">
        Completed: <span class="font-bold text-emerald-500">{{ completedTodos }}</span>
      </p>
      <p class="text-sm text-slate-500">
        Uncompleted: <span class="font-bold text-emerald-500">{{ uncompletedTodos }}</span>
      </p>
    </div>
  </section>
</template>
