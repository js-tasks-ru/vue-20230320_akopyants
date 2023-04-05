<template>
  <div class="toasts">
    <UiToast v-for="toast in toasts" :key="toast.id" :type="toast.type" :id="toast.id" @deleteToast="deleteToast">
      {{ toast.message }}
      </UiToast>
  </div>
</template>

<script>
import UiToast from './UiToast.vue';

export default {
  name: 'TheToaster',

  components: {
    UiToast,
  },

  data() {
    return {
      idStart: 1,
      timeLife: 5000,
      toasts: [],
    };
  },
  methods: {
    success(message) {
      this.addToasts(message, 'success');
    },
    error(message) {
      this.addToasts(message, 'error');
    },
    addToasts(message, type) {
      let toast = {
        id: this.idStart++,
        type: type,
        message: message,
      };

      this.toasts.push(toast);

      setTimeout(() => {
        this.deleteToast(toast.id);
      }, this.timeLife);
    },
    deleteToast(id) {
      let deleteItem = this.toasts.find((item) => item.id === id);
      let indexDeleteItem = this.toasts.indexOf(deleteItem);
      this.toasts.splice(indexDeleteItem, 1);
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
