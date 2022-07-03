<template>
  <div class="right-side">
    <div class="right-side__title">
      {{ $t(title) }}
    </div>
    <div class="right-side__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    changeViewFormat(value) {
      this.$emit("changeViewFormat", value);
    },
  },
};
</script>

<style lang="scss" scoped>
.right-side {
  background-color: #fff;
  height: 100%;
  padding: 15px 30px;
  @media(max-width:667px){
    padding:10px;

  }
  &__title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 15px;
     @media(max-width:667px){font-size: 0.9rem; margin-bottom:10px;}
  }
  &__content {
   
    padding-left: 15px;
     @media(max-width:667px){
      padding-left:5px;
    }
  }
}
</style>
