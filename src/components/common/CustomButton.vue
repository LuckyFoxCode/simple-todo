<script setup lang="ts">
interface Props {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'danger' | 'edit' | 'success';
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  color: 'primary',
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const colorClasses = {
  primary: 'bg-blue-500 hover:not-disabled:bg-blue-500',
  secondary: 'bg-gray-500 hover:not-disabled:bg-gray-500',
  danger: 'bg-red-400 hover:not-disabled:bg-red-500',
  edit: 'bg-yellow-400 hover:not-disabled:bg-yellow-500',
  success: 'bg-green-400 hover:not-disabled:bg-green-500',
};

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event);
  }
};
</script>

<template>
  <button
    class="rounded-lg px-3 py-2 text-white transition-colors duration-300 ease-in-out focus:outline-none"
    :class="[
      colorClasses[props.color],
      props.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
    ]"
    :disabled="props.disabled"
    :type="props.type"
    @click="handleClick"
  >
    {{ props.text }}
  </button>
</template>
