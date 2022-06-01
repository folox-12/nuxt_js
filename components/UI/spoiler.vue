t
<template>
  <div class="spoiler">
    <div
      class="spoiler__title"
      @click="showContent = !showContent"
      :class="{ open: showContent }"
    >
      <svg
        width="14"
        height="11"
        viewBox="0 0 14 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 8.70009L1.14211 10.1113L7 2.87302L12.8579 10.1113L14 8.70009L7 0.0960608L0 8.70009Z"
        />
      </svg>
      <a href="#" @click.prevent>{{ title }}</a>
    </div>
    <ul class="spoiler__content" v-if="showContent">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showContent: false,
    };
  },
  components: {},
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.spoiler {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  &__title {
    a {
      color: grey;
    }
    svg {
      transition: 0.2s;
      transform: rotate(180deg);
      fill: grey;
      margin-right: 15px;
    }
  }
  &__title.open {
    margin-bottom: 15px;
    a {
      color: #9b42f2;
    }
    svg {
      transform: rotate(0);
      fill: #9b42f2;
    }
  }

  &__content {
    padding-left: 30px;
  }
}
</style>
