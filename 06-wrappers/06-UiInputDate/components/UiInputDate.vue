<template>
  <UiInput ref="input" :type="type" :step="step" v-bind="$attrs" v-model="date">
    <template v-for="slot in Object.keys($slots)" #[slot]>
      <slot :name="slot" />
    </template>
  </UiInput>
</template>

<script>
import UiInput from './UiInput.vue';

export default {
  name: 'UiInputDate',
  components: { UiInput },
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'date',
    },
    modelValue: Number,
    step: String,
  },
  emits: ['update:modelValue'],
  computed: {
    date: {
      get() {
        return this.modelValue ? this.dateFormater() : '';
      },
      set() {
        let dateAsNumber = this.$refs['input'].$refs['input'].valueAsNumber;
        this.$emit('update:modelValue', dateAsNumber);
      },
    },
  },
  methods: {
    dateFormater() {
      const date = new Date(this.modelValue).toISOString();

      switch (this.type) {
        case 'date':
          return date.slice(0, 10);
        case 'time':
          return date.slice(11, 16);
        case 'datetime-local':
          return date.slice(0, 16);
      }
    },
  },
};
</script>
