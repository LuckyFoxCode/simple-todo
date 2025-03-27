<script setup lang="ts">
import IconGitHub from './icons/IconGitHub.vue';

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer
    class="flex shrink-0 flex-col items-center justify-between rounded-lg bg-white px-3 py-2 shadow-lg sm:flex-row md:px-20 lg:px-30"
  >
    <p class="order-2 text-slate-600 sm:order-1">
      &copy; {{ currentYear }} Created with practice in Vue 3
    </p>
    <a
      href="https://github.com/LuckyFoxCode"
      target="_blank"
      rel="noopener noreferrer"
      class="order-1 flex items-center gap-1 text-slate-400 transition-colors duration-300 ease-in-out hover:text-sky-500 sm:order-2"
    >
      <IconGitHub aria-label="GitHub" /> LuckyFoxCode</a
    >
  </footer>
</template>
