<script>
import { compile, h, defineComponent } from 'vue';

export default {
  name: 'TemplateRenderer',
  props: {
    template: {
      type: String,
      required: true,
    },
    bindings: {
      type: Object,
      default: () => ({}),
    },
    components: {
      type: [Object, Array],
      default: () => [],
    },
  },
  computed: {
    component() {
      return defineComponent({
        components: this.components,
        props: {
          bindings: Object,
        },
        render: compile(this.template),
      });
    },
  },
  render() {
    return h(this.component, { bindings: this.bindings });
  },
};

</script>