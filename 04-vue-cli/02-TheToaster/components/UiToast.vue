<template>
  <div class="toast" :class="{ toast_success: toastType === 'success', toast_error: toastType === 'error' }">
    <UiIcon class="toast__icon" :icon="iconType"/>
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
    toastType: {
      type: String,
    },
    toastId: {
      type: Number,
    },
  },
  computed: {
    iconType() {
      return this.toastType === 'success' ? 'check-circle' : 'alert-circle';
    },
  },
  components: { UiIcon },
  emits: ['deleteToast'],
  methods: {
    deleteToast() {
      this.$emit('deleteToast');
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
