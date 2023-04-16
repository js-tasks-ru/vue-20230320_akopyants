<template>
  <div class="image-uploader">
    <label class="image-uploader__preview" :class="{ 'image-uploader__preview-loading': loading }">
      <span class="image-uploader__text">
        {{ statusText }}
      </span>
      <input
        type="file"
        v-bind="$attrs"
        ref="input"
        @change="handleFileUpload"
        @click="deleteFile"
        accept="image/*"
        class="image-uploader__input"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'UiImageUploader',
  props: {
    preview: String,
    uploader: Function,
  },
  inheritAttrs: false,
  data() {
    return {
      file: null,
      imgSrc: this.preview,
      loading: false,
    };
  },
  emits: ['change', 'select', 'upload', 'error', 'remove'],
  computed: {
    imageSrc() {
      return this.imgSrc ? `url(${this.imgSrc}` : 'var(--default-cover)';
    },
    statusText() {
      if (this.loading) {
        return 'Загрузка...';
      }

      if (this.imgSrc && !this.uploader) {
        return 'Удалить изображение';
      }

      return 'Загрузить изображение';
    },
  },
  methods: {
    handleFileUpload(event) {
      this.file = event.target.files[0];
      if (!this.file) {
        return false;
      }
      this.imgSrc = URL.createObjectURL(this.file);

      if (this.uploader) {
        this.loading = true;
        this.uploader(this.file)
          .then((result) => {
            this.$emit('upload', result);
            this.loading = false;
          })
          .catch((error) => {
            this.$emit('error', error);
            this.loading = false;
            this.imgSrc = null;
            this.$refs.input.value = null;
          });
      }

      this.$emit('select', this.file);
    },
    deleteFile() {
      if (this.loading) {
        return false;
      }
      if (this.imgSrc) {
        this.imgSrc = null;
        this.$refs.input.value = null;
        this.$emit('remove');
      }
    },
  },
};
</script>

<style scoped>
.image-uploader__input {
  opacity: 0;
  height: 0;
}

.image-uploader__preview {
  --bg-url: var(--default-cover);
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), v-bind(imageSrc);
  border: 2px solid var(--blue-light);
  border-radius: 8px;
  transition: 0.2s border-color;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 512px;
  height: 228px;
}

.image-uploader__text {
  color: var(--white);
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
}

.image-uploader__preview:hover {
  border-color: var(--blue);
}

.image-uploader__preview.image-uploader__preview-loading {
  cursor: no-drop;
}
</style>
