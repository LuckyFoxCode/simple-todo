<script setup lang="ts">
import { computed, nextTick, ref } from 'vue';
import CustomButton from './common/CustomButton.vue';
import type { Todo } from '@/types/todo';

const props = defineProps<{
  todo: Todo;
}>();

const emit = defineEmits<{
  'toggle-todo': [id: string];
  'delete-todo': [id: string];
  'edit-todo': [id: string, value: string];
}>();

const isEdit = ref<boolean>(false);
const editValue = ref<string>('');
const editInput = ref<HTMLInputElement | null>(null);

const focusInput = () => {
  nextTick(() => {
    if (editInput.value) {
      editInput.value.focus();
    }
  });
};

const startEdit = () => {
  editValue.value = props.todo.value;
  isEdit.value = true;
  focusInput();
};

const saveEdit = () => {
  const trimmedValue = editValue.value.trim();
  if (trimmedValue === '') return;

  emit('edit-todo', props.todo.id, trimmedValue);
  isEdit.value = false;
};

const cancelEdit = () => {
  isEdit.value = false;
};

const formattedTodo = computed(() =>
  props.todo.value.length > 23 ? `${props.todo.value.slice(0, 23)}...` : props.todo.value,
);
</script>

<template>
  <li
    class="shadow-inner-item flex h-min items-center justify-between gap-1 rounded-lg border bg-slate-100 p-2"
  >
    <template v-if="isEdit">
      <input
        ref="editInput"
        v-model="editValue"
        type="text"
        class="w-full flex-1 rounded-lg border border-slate-300 p-2 transition-colors duration-300 ease-in-out focus:border-blue-500 focus:outline-none"
        @keyup.enter="saveEdit"
        @keyup.esc="cancelEdit"
      />
    </template>
    <template v-else>
      <p
        class="flex-1 text-center transition-colors duration-300 ease-in-out"
        :class="props.todo.completed ? 'text-slate-300' : 'text-slate-600'"
      >
        {{ formattedTodo }}
      </p>
      <label :for="props.todo.id">
        <div
          class="flex size-5 cursor-pointer items-center justify-center rounded-sm border transition-colors duration-300 ease-in-out hover:border-blue-500"
          :class="props.todo.completed ? 'border-green-500 bg-green-300' : 'border-slate-300'"
          role="checkbox"
          :aria-checked="props.todo.completed"
          @click.stop="emit('toggle-todo', props.todo.id)"
        >
          <span
            v-if="props.todo.completed"
            class="text-xs text-green-700"
            >✓</span
          >
        </div>
        <input
          :id="props.todo.id"
          type="checkbox"
          name="todo-item"
          class="hidden"
          :checked="props.todo.completed"
        />
      </label>
    </template>
    <div class="ml-2 flex gap-1">
      <template v-if="isEdit">
        <CustomButton
          text="💾"
          color="success"
          @click="saveEdit"
        />
        <CustomButton
          text="❌"
          color="danger"
          @click="cancelEdit"
        />
      </template>
      <template v-else>
        <CustomButton
          text="✏️"
          color="edit"
          @click="startEdit"
        />
        <CustomButton
          text="🗑️"
          color="danger"
          @click="emit('delete-todo', props.todo.id)"
        />
      </template>
    </div>
  </li>
</template>
