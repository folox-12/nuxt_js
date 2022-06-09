t
<template>
  <div class="spoiler">
    <div
      class="spoiler__title"
      @click="showContent = !showContent"
      :class="{ open: showContent }"
    >
      <icon-base
        :width="'1rem'"
        :height="'1rem'"
        :iconType="'arrow-down'"
        :fill="showContent ? '#9b42f2' : 'grey'"
        :deg="showContent ? '0deg' : '180deg'"
      />
      <a href="#" @click.prevent>{{ title }}</a>
    </div>
    <ul class="spoiler__content" v-show="showContent">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import IconBase from "../icons/IconBase.vue";
export default {
  data() {
    return {
      showContent: false,
    };
  },
  components: {
    IconBase,
  },
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
    display: flex;
    gap: 15px;
    a {
      color: grey;
    }
  }
  &__title.open {
    margin-bottom: 15px;
    a {
      color: #9b42f2;
    }
  }

  &__content {
    padding-left: 30px;
  }
}
</style>
