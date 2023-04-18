<template>
  <button @click="increase">
    {{ localCount }}
  </button>
</template>

<script>
export default {
  name: 'CounterButton',
  props: {
    count: {
      type: Number, 
      default: 0
    }
  },
  data() {
    return {
      localCount: this.count
    }
  },
  watch: {
    count: {
      handler(value) {
        this.localCount = value
      }
    }
  },
  methods: {
    increase() {
      this.$emit('update:count', ++this.localCount)
    }
  }
};
</script>
