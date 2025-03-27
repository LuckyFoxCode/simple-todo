<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

const date = ref<Date>(new Date());

const updateDate = () => {
  date.value = new Date();
};

let intervalId: number;

onMounted(() => {
  updateDate();
  intervalId = setInterval(updateDate, 60000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});

const time = computed(() =>
  Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(date.value),
);

const formattedDate = computed(() =>
  Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date.value),
);
</script>

<template>
  <header
    class="flex flex-col items-center justify-between rounded-lg bg-white px-3 py-2 shadow-lg sm:flex-row"
  >
    <h1 class="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-2xl text-transparent">
      App for your notes
    </h1>
    <div class="flex flex-row items-center sm:flex-col">
      <span
        aria-live="polite"
        class="hidden text-slate-400 sm:block"
        >{{ time }}</span
      >
      <span class="text-sm text-sky-500">{{ formattedDate }}</span>
    </div>
  </header>
</template>
