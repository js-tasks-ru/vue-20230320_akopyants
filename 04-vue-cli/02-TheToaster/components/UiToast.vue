<template>
    <div class="toast" :class="{ toast_success: type === 'success', toast_error: type === 'error' }">
      <UiIcon v-if="type == 'success'" class="toast__icon" icon="check-circle" />
      <UiIcon v-if="type == 'error'" class="toast__icon" icon="alert-circle" />
      <span>
        <slot />
      </span>
      <div class="toast-close" @click="deleteToast">x</div>
    </div>
</template>

<script>
import UiIcon from './UiIcon.vue';

export default {
  name: 'UiToast',
  props: {
    type: {
      type: String,
    },
    id: {
      type: Number,
    },
  },
  components: { UiIcon },
  emits: ['deleteToast'],
  methods: {
    deleteToast() {
      this.$emit('deleteToast', this.id);
    },
  },
};
</script>

<style>
.toast {
  position: relative;
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast-close {
  position: absolute;
  top: -5px;
  right: 5px;
  cursor: pointer;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
